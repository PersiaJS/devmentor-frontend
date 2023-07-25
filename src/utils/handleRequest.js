import axios from "axios";

const handleRequest = () => {
  const headers = {
    "content-type": "application/json",
  };

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: false,
    headers,
  });

  return instance;
};

export default handleRequest;
