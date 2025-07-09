const axios = require('axios');

const getAnimeRecommendations = async (genre = 'action') => {
  const genreMap = {
    action: 1, comedy: 4, drama: 8, romance: 22, mystery: 7,
    fantasy: 10, sports: 30, horror: 14, sciFi: 24, psychological: 40
  };

  const genreId = genreMap[genre.toLowerCase()] || 1;
  const res = await axios.get(`https://api.jikan.moe/v4/anime`, {
    params: { genres: genreId, order_by: 'score', sort: 'desc', limit: 5 }
  });

  return res.data.data.map(anime => ({
    title: anime.title,
    synopsis: anime.synopsis,
    rating: anime.score,
    image: anime.images.jpg.image_url,
    url: anime.url
  }));
};

module.exports = { getAnimeRecommendations };
