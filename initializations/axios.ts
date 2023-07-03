import axios, { InternalAxiosRequestConfig } from "axios";
import { API_URL } from "../config/app";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    if (config?.headers != null) {
      const jwtToken = localStorage.getItem("token");
      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
    }
    return config;
  },
  (error) => console.log(error)
);

export default instance;
