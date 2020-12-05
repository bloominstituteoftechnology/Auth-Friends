import React,{useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {Card,Button,CardTitle, CardSubtitle, CardBody} from 'reactstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function FriendProfile(){
    const[friend,setFriend]=useState([])
    const param=useParams();
    const history=useHistory();
    console.log('param=',param.id)
    useEffect(()=>{
        fetchFriend();
    },[])

    const fetchFriend=()=>{
        axiosWithAuth()
        .get(`/api/friends/${param.id}`)
        .then(res=>{
            console.log('res in id=',res)
            setFriend(res.data)
        })
        .catch(err=>console.log('err in id',err))

    }

    const handleClick=(e)=>{
        history.push('/friends');
    }
    return(
        <div className="friendCard">
            <h5>Friend Profile !</h5>
            <Card>
                <CardTitle>{friend.name}</CardTitle>
                <CardSubtitle>Age : {friend.age}</CardSubtitle>
                <CardBody>Email:{friend.email}</CardBody>
            </Card>
             <Button color="info" onClick={handleClick}>Back to List!</Button>

        </div>
    )
}
export default FriendProfile;