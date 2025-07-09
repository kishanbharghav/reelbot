import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import './App.css';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx0QYR_l5qwpreb5RKuaqNqHWNU7fut20",
  authDomain: "reelbot-1df80.firebaseapp.com",
  projectId: "reelbot-1df80",
  storageBucket: "reelbot-1df80.firebasestorage.app",
  messagingSenderId: "41964889790",
  appId: "1:41964889790:web:4f204f713de7fb311b20ef",
  measurementId: "G-KNNMYLYCBC"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function App() {
  const [input, setInput] = useState('');
  const [type, setType] = useState('movie');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
    setUser(null);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text: input }]);

    const payload = {};
    const lower = input.toLowerCase();
    if (['happy', 'sad', 'romantic', 'angry', 'bored', 'stressed'].includes(lower)) {
      payload.mood = lower;
    } else {
      payload.genre = lower;
    }
    payload.type = type;

    setMessages(prev => [...prev, { from: 'bot', text: 'Typing...', loading: true }]);

    try {
      const token = user ? await user.getIdToken() : null;
      const res = await axios.post('http://localhost:5000/recommend', payload, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      const recommendations = res.data;

      const botText = recommendations.length
        ? recommendations.map(item =>
            `🎬 ${item.title}\n⭐ ${item.rating || 'N/A'}\n${item.overview || item.synopsis || ''}`
          ).join('\n\n')
        : 'Sorry, I couldn’t find any recommendations.';

      setMessages(prev => [...prev.filter(m => !m.loading), { from: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev.filter(m => !m.loading), { from: 'bot', text: 'Oops! Something went wrong.' }]);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">🎥 ReelTalk – Recommender Bot</h1>

      {user ? (
        <div className="user-info">
          <img
           src={user.photoURL ? user.photoURL : "https://api.dicebear.com/6.x/bottts/png?seed=animeBot&size=80"}
           alt="avatar"
           className="avatar"
           width="40"
           height="40"
          />
          <span>{user.displayName}</span>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <button className="login-button" onClick={handleSignIn}>Sign in with Google</button>
      )}

      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-bubble ${msg.from}`}>{msg.text}</div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-controls">
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="movie">Movie</option>
          <option value="anime">Anime</option>
        </select>
        <input
          type="text"
          placeholder="Enter mood or genre..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
