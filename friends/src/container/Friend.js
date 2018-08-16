import React from 'react';
import UpdateForm from './UpdateForm';
// import UpdateForm from './UpdateForm';
// import { edit , delete } actions

export default function Friend (props) {
    if (isUpdating){
        return (
            <div className="Friend">
                <div className="info">{/*name, age, email*/}</div>
                <UpdateForm />
            </div>
        )
    } else {
        return (
            <div className="Friend">
                <div className="info"></div>
                <button>{/*edit*/}</button>
                <button>{/*delete*/}</button>
            </div>
        )
    }    
}