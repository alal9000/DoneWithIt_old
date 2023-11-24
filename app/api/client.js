import { create } from 'apisauce'

const apiClient = create({
  baseURL: "http://192.168.20.7:5000/api"
});


export default apiClient;