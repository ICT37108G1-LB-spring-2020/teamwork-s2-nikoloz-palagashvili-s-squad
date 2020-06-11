import axios from "axios";

// const data = axios.get(`${API}/posts?en=${en}`);

const AppAPI = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Accept: "*/*",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
});

AppAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return;
  }
);
export default AppAPI;
