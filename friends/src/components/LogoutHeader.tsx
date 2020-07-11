import * as React from "react";
import "./LogoutHeader.css";


interface LogoutProps {
    history: any;
}

const LogoutHeader:React.FC<LogoutProps> = ({history}) => {

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
