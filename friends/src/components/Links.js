import React from 'react';
import { Link } from 'react-router-dom';
const Links = () => {
   return(
    <div className='links'>
    <Link className='link' to='/'>Home</Link>
    <Link className='link' to='/login'>Login</Link>
    <Link className='link' to='/friends'>Friends</Link>
    </div>
   );
    
}
 
export default Links ;