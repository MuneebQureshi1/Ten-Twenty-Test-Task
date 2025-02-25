import Endpoints from "../../constants/endpoints";
import { dataServer } from "../axiosConfig";

const useGetApi = () => {
  const { postCurd } = Endpoints();

  const getAllPostApi = async () => {
    try {
      const response = await dataServer.get(postCurd.get_all_post());
      return response;
    } catch (err) {}
  };

  return {
    getAllPostApi,
  };
};

export default useGetApi;
