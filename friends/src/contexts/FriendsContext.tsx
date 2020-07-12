import * as React from "react";
import {Context, createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const FriendsContext: Context<any> = createContext({});

export const FriendsProvider = ({children}: any) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [friends, setFriends] = useState([]);

    return (
        <FriendsContext.Provider
            value={{
                history,
                loading,
                setLoading,
                friends,
                setFriends
            }}
        >
            {children}
        </FriendsContext.Provider>
    );
}