import axios from "axios";
import { IPhotoData } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common[
  "Authorization"
] = `Client-ID NIabBYlrDU4JcNsdw-nJWiK9K-P7Gb1wdWS2yhxUOoo`;

const getPhotosApi = async (
  query: string,
  page: number
): Promise<IPhotoData | null> => {
  try {
    const { data } = await axios.get("/search/photos", {
      params: {
        query,
        per_page: 10,
        page,
      },
    });
    return data;
  } catch (error) {
    alert("Something went wrong...");
    return null;
  }
};

export default getPhotosApi;
