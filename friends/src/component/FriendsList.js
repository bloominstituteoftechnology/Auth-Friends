
import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import moment from "moment";
// import Loader from "react-loader-spinner";
// import { axiosWithAuth } from '../utils/axiosWithAuth';





class FriendsList extends React.Component {
   
        state = {
          friendsList: [],
        };
      
        componentDidMount() {
          this.getData();
        }
      
        getData = () =>{


            const token = JSON.parse(localStorage.getItem("token"));

            axiosWithAuth()
            .get('/api/friends', {
              
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log({ err }));
        };
     
         }
            
export default FriendsList;


