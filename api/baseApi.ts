import axios from "axios";
import Cookies from "js-cookie";

//const apiUrl = import.meta.env.VITE_API_URL
const apiUrl = 'https://jsonplaceholder.typicode.com'

const baseApi = axios.create({
  baseURL: apiUrl,
});

baseApi.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseApi;
