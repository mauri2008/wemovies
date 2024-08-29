import axios from "axios";

const baseURL = import.meta.env.VITE_APP_URL_BASE;
export const AxiosInstance = axios.create({
  baseURL,
});
