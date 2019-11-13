import axios from "axios"

export default function(){
    return axios.create({
        baseURL:"http://localhost:5000",
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
}