import Endpoints from "../../constants/endpoints";
import { dataServer } from "../axiosConfig";

const usePostApi = () => {
  const { postCurd } = Endpoints();
  const addPostApi = async (data: number) => {
    try {
      const response = await dataServer.post(postCurd.get_all_post(), data);
      return response;
    } catch (err: any) {
      console.log("error", err.data.error);
    }
  };
  return {
    addPostApi,
  };
};
export default usePostApi;
