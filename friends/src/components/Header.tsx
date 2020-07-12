import * as React from "react";
import "./Header.css";
import {useContext} from "react";
import {FriendsContext} from "../contexts/FriendsContext";


interface HeaderProps {
    //history: any;
}

const Header:React.FC<HeaderProps> = () => {

    const {history} = useContext(FriendsContext);

    const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem("token");
        history.push("/login");
    }

    return(
        <div className="header">
            <button onClick={() => history.push("/friends_list")}>View Friends</button>
            <button onClick={() => {history.push("/friends")}}>Add Friends</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Header;
