import React, { Component } from "react"

class Login extends React.Component{
/*
        todo : make npm create-react-app client
*/

constructor(props){
    super(props)
    this.state =
    {
        login:{user:'name',password:'lambda'}
    }




}



render(){

    return(
        <div>
            <form>
                <input type="text" />
                <input type="password" />
            </form>
        </div>
    );
}





}