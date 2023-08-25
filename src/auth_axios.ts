import axios, { AxiosInstance } from "axios";

// Authenticated Axios Configurations
const authAxios: AxiosInstance = axios.create({
  baseURL: "https://dongquoctranh.pythonanywhere.com/api/",
  timeout: 5000,
});

export default authAxios;
