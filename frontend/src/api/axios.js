import axios from "axios";

const baseURL="https://certify-api.onrender.com/api"
const token = localStorage.getItem('refreshToken')


export default axios.create({
    baseURL,
});

const axiosPrivate = axios.create({
  baseURL,
  headers: { 
    "Content-Type": "application/json",
    "Authorization" : `Bearer ${token}`
 }
});

export {axiosPrivate};
