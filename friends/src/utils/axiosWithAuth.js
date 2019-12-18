import axios from 'axios'

export const axiosWithAuth =()=>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'https://localhost5000/api',
        headers:{
            authorization: token 
        }
    })
};