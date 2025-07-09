# 🎬 ReelTalk – Movie & Anime Recommender Chatbot

ReelTalk is a modern, full-stack chatbot that gives you **personalized movie and anime recommendations based on your mood or genre** — all in a stylish, anime-inspired chat interface. 💬🍿

---

## 🌟 Features

- 🔐 **Google Login** using Firebase Auth
- 💬 Real-time chat with modern UI
- 🧠 Mood & genre-based natural conversation
- 🎥 **Movie recommendations** via [TMDB API](https://www.themoviedb.org/)
- 🎌 **Anime recommendations** via [Jikan API](https://jikan.moe/)
- 🖼️ Fallback avatars via [DiceBear API](https://www.dicebear.com/)
- 🌐 Hosted with [Vercel](https://vercel.com) + [Render](https://render.com)

---

## 🖼️ Demo

> Live Site: [https://your-reeltalk.vercel.app](https://your-reeltalk.vercel.app)  
> Backend API: [https://your-api.onrender.com/recommend](https://your-api.onrender.com/recommend)

![Demo Screenshot](./demo/screenshot.png)

---

## 🧩 Tech Stack

### 🔷 Frontend
- React.js (SPA with Hooks)
- Axios for API communication
- Firebase Authentication
- Responsive CSS (custom + anime-inspired)

### 🔶 Backend
- Node.js with Express
- Firebase Admin SDK for auth validation
- TMDB API (movies)
- Jikan API (anime)
- CORS + .env for environment config

---

## 🛠️ Setup Instructions

### 📦 1. Clone the Repository

```bash
git clone https://github.com/yourusername/reeltalk.git
cd reeltalk

🔧 2. Install Frontend & Backend Dependencies
cd reelbot-frontend
npm install

cd ../reelbot-backend
npm install

🔑 3. Environment Setup
Create .env files in both frontend and backend:
TMDB_API_KEY=your_tmdb_key
