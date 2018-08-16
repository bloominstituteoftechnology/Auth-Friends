import React from 'react';

const Friends=props=><div className='card'>
<p>{props.data.id}</p>
<p>{props.data.name}</p>
<p>{props.data.age}</p>
<p>{props.data.email}</p>
<p>{props.data.ccNumber}</p>
</div>
export default Friends;