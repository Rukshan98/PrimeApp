import Endpoints from "./Endpoints";
import axios from "axios";

export const postBooking = async (token, data) => {
  try {
    let axiosClient = axios.create({
      baseURL: Endpoints.baseURL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      timeout: 5000,
    });

    let response = await axiosClient.post(Endpoints.booking, data);
    // console.log('the responds  ---------->', response.data)
    return response;
  } catch (e) {
    throw e;
  }
};
