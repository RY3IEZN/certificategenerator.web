import axios from "axios";

const baseURL="https://certify-api.onrender.com/api/docs/api/auth"

const axiosInstance = axios.create({
  baseURL,
  headers: { "Contsent-Type": "application/json" },
});

export const signupUser = (userData) => {
  return axiosInstance.post("/signup", userData);
};
export const loginUser = (userData) => {
  return axiosInstance.post("/login", userData);
};
