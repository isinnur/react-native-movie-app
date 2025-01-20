import axios from 'axios';
import {apiKey} from './constants';

// endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upComingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

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
  return await apiCall(upComingMoviesEndpoint);
};

export const fetchTopRatedMovies = async () => {
  return await apiCall(topRatedMoviesEndpoint);
};
