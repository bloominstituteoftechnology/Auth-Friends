import React, {useState} from 'react';
import axios from 'axios';


function Friends(){
const [useData, setuseData] = useState();

axios.get(
    `http://localhost:5000/api/friends`
)
.then(res => {setuseData(res.data)}
)

.catch(err =>{
})


}

export default Friends;