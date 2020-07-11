import * as React from "react";
import { Route, Redirect } from "react-router-dom";

//why no interface props needed?

const PrivateRoute = ({ component: Component, ...rest }: any) => {//todo: is any the best type or is there something better?
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("token") ? <Component {...props}/> : <Redirect to="/login"/>
            }
        />
    );
};
export default PrivateRoute;