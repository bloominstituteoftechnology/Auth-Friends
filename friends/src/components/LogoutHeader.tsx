import * as React from "react";
import "./LogoutHeader.css";
import {useContext} from "react";
import {FriendsContext} from "../contexts/FriendsContext";


interface LogoutProps {
    //history: any;
}

const LogoutHeader:React.FC<LogoutProps> = () => {

    const {history} = useContext(FriendsContext);

    const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem("token");
        history.push("/login");
    }

    return(
        <div className="logout">
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default LogoutHeader;
