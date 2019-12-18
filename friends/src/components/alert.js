import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { clearAlert} from '../actions';


function Alert(props) {


    useEffect( () => {
        if (props.error !== null) {
            setTimeout(() => props.clearAlert(), 5000)
        }
    },[props.error, props.clearAlert])



    return (
       
    
        <div className = 'alert'>
            {(props.error !== null) && (props.error)}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}
export default connect(mapStateToProps, { clearAlert})(Alert);