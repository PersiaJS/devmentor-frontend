/* eslint-disable no-undef */
import axios from "axios";
import Cookie from "universal-cookie";

const client = axios.create();

client.defaults.baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://devmentor-b.fly.dev";

const cookie = new Cookie();

client.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: cookie.get("auth"),
};

client.defaults.withCredentials = false;

export default client;
