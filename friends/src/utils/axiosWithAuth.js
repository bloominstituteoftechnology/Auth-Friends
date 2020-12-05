import axios from 'axios';

export const axiosWithAuth=()=>{

    // this will return newly created instance of axios with authorization token passed into the header
const token=window.localStorage.getItem('token');

return axios.create({
    headers:{
        authorization:token
    },
baseURL:'http://localhost:5000'
})
}