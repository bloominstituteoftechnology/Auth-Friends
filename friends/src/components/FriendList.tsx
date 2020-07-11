import * as React from "react";
import LogoutHeader from "./LogoutHeader";
import AddFriendsForm from "./AddFriendsForm";
import {useEffect} from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";



interface FriendProps {
    history: any;//todo: figure out what type this should be
    loading: boolean;
}

const FriendList:React.FC<FriendProps> = ({history, loading}) => {

    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => console.log("Friends: ", res))
            .catch(err=> console.log("Error getting friends: ", err));
    });

    return(
        <div className="friendList">
            <LogoutHeader history={history}/>
            <AddFriendsForm loading={loading}/>
        </div>
    );
}

export default FriendList;
