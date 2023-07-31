import axios from "axios";

const handleRequest = () => {
  const headers = {
    "content-type": "application/json",
  };

  const instance = axios.create({
    baseURL: "https://devmentor-b.fly.dev",
    withCredentials: false,
    headers,
  });

  return instance;
};

export default handleRequest;
