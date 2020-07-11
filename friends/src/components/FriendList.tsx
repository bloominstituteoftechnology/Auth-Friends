import * as React from "react";
import LogoutHeader from "./LogoutHeader";



interface FriendProps {
    history: any//todo: figure out what type this should be
}

const FriendList:React.FC<FriendProps> = ({history}) => {
    return(
        <div className="friendList">
            <LogoutHeader history={history}/>
            asdf
        </div>
    );
}

export default FriendList;
