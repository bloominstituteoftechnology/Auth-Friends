
//-- Dependencies --------------------------------
import React from "react";

//-- Error ---------------------------------------
export default function (props) {
    if(!props.error){ return null;}
    return (
        <div className="error">
            {props.error}
        </div>
    );
}
