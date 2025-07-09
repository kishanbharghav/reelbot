const axios = require('axios');
const TMDB_KEY = process.env.TMDB_API_KEY;

const getGenreId = async (genreName) => {
  const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_KEY}`);
  const genres = res.data.genres;
  const found = genres.find(g => g.name.toLowerCase() === genreName.toLowerCase());
  return found ? found.id : 18;
};

const getTMDBRecommendations = async (genre) => {
  const genreId = await getGenreId(genre);
  const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: { api_key: TMDB_KEY, with_genres: genreId, sort_by: 'popularity.desc' }
  });
  return res.data.results.slice(0, 5).map(movie => ({
    title: movie.title,
    overview: movie.overview,
    rating: movie.vote_average,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  }));
};

module.exports = { getTMDBRecommendations };
