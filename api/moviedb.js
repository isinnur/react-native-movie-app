import axios from 'axios';
import {apiKey} from './constants';

// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMoviesEndpoints = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

// dynamic endpoint
const movieDetailsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = id =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndpoints = id =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

const personDetailsEndpoint = id =>
  `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const personMoviesEndpoint = id =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

export const image500 = path =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342 = path =>
  path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const image185 = path =>
  path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

export const fallbackMoviePoster =
  'https://arthurmillerfoundation.org/wp-content/uploads/2018/06/default-placeholder.png';
export const fallbackPersonImage =
  'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg';

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovies = async () => {
  return await apiCall(trendingMoviesEndpoint);
};

export const fetchUpcomingMovies = async () => {
  return await apiCall(upcomingMoviesEndpoint);
};

export const fetchTopRatedMovies = async () => {
  return await apiCall(topRatedMoviesEndpoint);
};

export const fetchMovieDetails = id => {
  return apiCall(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = id => {
  return apiCall(movieCreditsEndpoint(id));
};

export const fetchSimilarMovies = id => {
  return apiCall(similarMoviesEndpoints(id));
};

export const fetchPersonDetails = id => {
  return apiCall(personDetailsEndpoint(id));
};

export const fetchPersonMovies = id => {
  return apiCall(personMoviesEndpoint(id));
};

export const searchMovies = params => {
  return apiCall(searchMoviesEndpoints, params);
};
