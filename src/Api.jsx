import axios from "axios";

const apiURL=import.meta.env.VITE_API_URL

const Api = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});

export default Api;
