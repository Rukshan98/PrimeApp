import axios from "axios";
import Endpoints from "./Endpoints";


const axiosClient = axios.create({
    baseURL: Endpoints.baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout:5000,
  });

  export default axiosClient;