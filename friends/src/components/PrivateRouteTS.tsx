import * as React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

//why no interface props needed?
interface PrivateRouteTSProps<P={}>{
    component: React.FC<RouteComponentProps<P>>;
    [key: string]: any;

}

const PrivateRoute: React.FC<PrivateRouteTSProps> = ({ component: Component, ...rest }) => {//todo: is any the best type or is there something better?
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