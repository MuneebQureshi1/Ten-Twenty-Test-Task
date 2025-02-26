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

  return {
    getAllUpcomingMoviesApi,
  };
};

export default useGetApi;
