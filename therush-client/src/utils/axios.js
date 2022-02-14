import { apiConfig } from "../configs/config";
import axios from "axios";

const rushAPI = axios.create({
  baseURL: apiConfig.apiRoot,
  timeout: 5000,
  headers: {
    "Accept-Version": 1,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export { rushAPI };
