import React from "react"
import { Redirect } from "react-router-dom"; // Redirect is another React method. 

function Logout(props) {
	// Nothing has to happen on the server to log out,
	// just delete the token
	localStorage.removeItem("token")
	
	return <Redirect to="/login" />
}

export default Logout

/*Notice how this component does not display anything. It is just reusable logic that reroutes conditionally. */