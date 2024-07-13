import axios from "axios";

export const guardApi = axios.create({
  baseURL: "https://wallet.b.goit.study/docs",
});
