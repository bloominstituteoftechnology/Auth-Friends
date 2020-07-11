import * as React from "react";
import LogoutHeader from "./LogoutHeader";
import AddFriendsForm from "./AddFriendsForm";
import {useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";



interface FriendProps {
    history: any;//todo: figure out what type this should be
    loading: boolean;
    setLoading: any;//(loading: boolean) => void;
}

const FriendList:React.FC<FriendProps> = ({history, loading, setLoading}) => {

    useEffect(() => {
        console.log(loading);
        //setLoading(true);//todo: getting "setLoading" is not a function? loading and setLoading seam undefined but history passed okay
        axiosWithAuth().get("http://localhost:5000/api/friends")
            .then(res => {
                console.log("Friends: ", res);
                //setLoading(false);
            })
            .catch(err=> {
                console.log("Error getting friends: ", err);
                //setLoading(false);
            });
    });

    return(
        <div className="friendList">
            <LogoutHeader history={history}/>
            <AddFriendsForm loading={loading} setLoading={setLoading}/>
        </div>
    );
}

export default FriendList;
