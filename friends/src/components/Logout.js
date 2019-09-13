import React, {useEffect} from 'react';

const Logout = (props) => {

    useEffect(()=>{
        localStorage.setItem('token', null);
        props.setLogged(true);
        props.history.push('/');
    },[])
    return ( 
        <div>Logout yo</div>
     );
}
 
export default Logout;