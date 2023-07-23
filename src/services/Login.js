import Endpoints from "./Endpoints";
import axiosClient from "./Api";

export const Login = async () => {
  let payload = {
    email: "import5@primelogistics.ae",
    password: "123456",
  };
  try {
    let response = await axiosClient.post(Endpoints.login, payload);
    console.log('the login api ----->',response.data)
    return response;
  } catch (e) {
    throw e;
  }
};
