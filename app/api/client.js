import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://159.196.169.142:5000/api'
});

apiClient.get('/listings').then(response => {
  if (!response.ok) {
    response.problem
  }
})