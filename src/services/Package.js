import Endpoints from "./Endpoints";
import axios from "axios";




export const getPackages = async payload => {


    try {


        let axiosClient = axios.create({
            baseURL: Endpoints.baseURL,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + payload
            },
            timeout: 5000,
        });

        let response = await axiosClient.get(Endpoints.packages);
        // console.log('the responds  ---------->', response.data)
        return response;

    } catch (e) {
        throw e;
    }
};