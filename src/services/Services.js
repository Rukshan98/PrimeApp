import Endpoints from "./Endpoints";
import axios from "axios";


export const getServices = async (payload) => {
  try {
    let axiosClient = axios.create({
      baseURL: Endpoints.baseURL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + payload,
      },
      timeout: 5000,
    });

    let response = await axiosClient.get(Endpoints.services);
    return response;
  } catch (e) {
    throw e;
  }
};
