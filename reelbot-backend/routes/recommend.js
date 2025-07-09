const express = require('express');
const router = express.Router();
const { getTMDBRecommendations } = require('../utils/tmdb');
const { getAnimeRecommendations } = require('../utils/jikan');

const moodGenreMap = {
  sad: 'family', happy: 'comedy', bored: 'thriller', stressed: 'animation',
  romantic: 'romance', angry: 'action'
};

router.post('/', async (req, res) => {
  const { mood, genre, type = 'movie' } = req.body;
  const resolvedGenre = moodGenreMap[mood?.toLowerCase()] || genre || 'drama';

  try {
    const data = type === 'anime'
      ? await getAnimeRecommendations(resolvedGenre)
      : await getTMDBRecommendations(resolvedGenre);

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

module.exports = router;
