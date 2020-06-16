import React, {useState, useEffect} from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = (props) => {
  const [gasPrices, setGasPrices] = useState({
    gasPrices: []
  })

  useEffect(() => {
   return () => {
    getData();
   }   
}, []);

 
  const getData = () => {
    //get request
    //add the token to the authorization header
    //filter data for just US and Hawaii and regular gasoline prices
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/data")
      .then(res => {
        this.setState({
          gasPrices: res.data.data.filter(
            price =>
              (price.location === "US" ||
                price.location === "State of Hawaii") &&
              price.type === "Gasoline - Regular"
          )
        });
      })
      .catch(err => console.log(err));
  };

  
    return (
      <div className="gas-prices">
        
      </div>
    );
  }


export default Friends;
