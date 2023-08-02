import Endpoints from "./Endpoints";
import axios from "axios";




export const getState = async (payload,add) => {



    try {


        let axiosClient = axios.create({
            baseURL: Endpoints.baseURL,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + payload
            },
            timeout: 10000,
        });

        let response = await axiosClient.get(Endpoints.state+add);
        // console.log('the state response api -------------->', response.data)
        return response;

    } catch (e) {
        throw e;
    }
};