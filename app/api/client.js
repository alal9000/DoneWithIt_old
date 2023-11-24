import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://159.196.169.142:5000/api"
});

export default apiClient;
