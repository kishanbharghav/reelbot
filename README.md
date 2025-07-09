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
![Screenshot 2025-07-09 175353](https://github.com/user-attachments/assets/b50d7ef9-2282-4a7b-ae68-380d16845557)

![Screenshot 2025-07-09 170348](https://github.com/user-attachments/assets/2b38dc50-80a2-49b6-9f09-52e313707737)

![Screenshot 2025-07-09 170451](https://github.com/user-attachments/assets/1b81def6-81bf-4e5e-8726-29915688ab97)

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
