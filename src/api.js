import axios from "axios";

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  return api;
};
