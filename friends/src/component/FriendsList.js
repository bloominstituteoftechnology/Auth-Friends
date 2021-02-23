import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";





class FriendsList extends React.Component {
   
        state = {
          friendsList: [],
        };
      
        componentDidMount() {
          this.getData();
        }
      
        // getData = () => {
        //   // axios request to get data
        //   // needs an "authorization" header to pass the middleware fn in the server
        //   const token = JSON.parse(localStorage.getItem("token"));
        //   axiosWithAuth()
        //     .get("/api/friends")
        //     .then((res) => {
        //       console.log(res);
              // set data to state - but only the objects for the US and State of Hawaii,
              // and only for regular gasoline
            //   this.setState({
            //     friendsList: res.data.data
              }




