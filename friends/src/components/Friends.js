import React from 'react';
import {deleteFriend} from '../actions';
import {connect} from 'react-redux';
const Friends=props=><div className='card'>
<p>{props.data.id}</p>
<p>{props.data.name}</p>
<p>{props.data.age}</p>
<p>{props.data.email}</p>
<p>{props.data.ccNumber}</p>
<i className="fas fa-trash-alt" onClick={()=>props.deleteFriend(props.data.id)}></i>
</div>
const mapStateToProps=()=>{
    return {}
}
export default connect(mapStateToProps,{deleteFriend})(Friends);