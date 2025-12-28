import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // change if your backend uses other port
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
