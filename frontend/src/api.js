// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://vetri-payslip-backend-1.onrender.com/api",
// });

// export default API;




import axios from "axios";
const API = axios.create({
  baseURL: "https://vetri-payslip-backend-1.onrender.com/api",
});

// Optional: automatically attach token to all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
