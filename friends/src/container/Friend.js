import React from 'react';
import UpdateForm from './UpdateForm';
import UpdateForm from './UpdateForm';
// import { editAction , delAction} from '../actions';

export default function Friend (props) {
    if (isUpdating){
        return (
            <div className="Friend">
                <div className="info">{/*name, age, email*/}</div>
                <UpdateForm />
                <button>{/*put*/}</button>
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

