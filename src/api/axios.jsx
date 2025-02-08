import axios from "axios";
import { toast } from "react-toastify";
const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add an Axios interceptor to handle responses with status code 401
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.error("Your session is Expired please login again.");
      // Token is expired or invalid, redirect to the "/" route
      if (token) {
        localStorage.removeItem("token");
      }
      setTimeout(() => {
        window.location.replace("/");
      }, 2000);

      //if user is admin then go to /super-admin/
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
