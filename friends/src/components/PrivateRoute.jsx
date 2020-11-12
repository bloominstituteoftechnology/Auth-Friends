import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
	const loginStatus = useSelector((state) => state.loginStatus);

	return (
		<Route {...props}>
			{loginStatus ? props.children : <Redirect to="/login" />}
		</Route>
	);
}

export default PrivateRoute;
