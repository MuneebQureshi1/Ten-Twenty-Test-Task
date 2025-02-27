import Endpoints from '../../constants/endpoints';
import {dataServer} from '../axiosConfig';

const useGetApi = () => {
  const {moviesCurd} = Endpoints();

  const getAllUpcomingMoviesApi = async () => {
    try {
      const response = await dataServer.get(moviesCurd.get_upcoming_movies());
      return response;
    } catch (err) {}
  };
  const getMoviesDetailApi = async (id: string) => {
    try {
      const response = await dataServer.get(moviesCurd.get_movie_detail(id));
      return response;
    } catch (err) {}
  };
  const getMoviesTrailerApi = async (id: string) => {
    try {
      const response = await dataServer.get(moviesCurd.get_video_url(id));
      return response;
    } catch (err) {}
  };
  const searchMovieApi = async (movieName: string) => {
    try {
      const response = await dataServer.get(moviesCurd.get_movie(movieName));
      return response;
    } catch (err) {}
  };

  return {
    getAllUpcomingMoviesApi,
    getMoviesDetailApi,
    getMoviesTrailerApi,
    searchMovieApi,
  };
};

export default useGetApi;
