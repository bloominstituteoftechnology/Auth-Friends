import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem()
}

return axios.create({
  body:
    { username: 'Lambda School', password: 'i<3Lambd4' },
  baseURL: 'http://localhost:5000/api'
})