import axios from "axios";

const client = axios.create();

client.defaults.baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://devmentor-b.fly.dev";

client.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

client.defaults.withCredentials = false;

export default client;
