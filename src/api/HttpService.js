import axios from "axios";
import config from "../config/config";

const HttpService = axios.create({
  baseURL: config.ROOT_URL,
  timeout: 10000
});

export default HttpService;
