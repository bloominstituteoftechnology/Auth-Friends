import React,{useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Form,Label,Input,Button} from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner';

function FriendForm(props){

const history=useHistory();
const params=useParams();
const [loading,setLoading]=useState(false);

const [friendData,setFriendData]=useState({
    id:Date.now(),
    name:'',
    age:'',
    email:'',
})

const fetchFriend=()=>{
    setLoading(true)
    axiosWithAuth()
    .get(`/api/friends/${params.id}`)
    .then(res=>{
        console.log('res in id=',res)
        setFriendData(res.data)
        setLoading(false)
    })
    .catch(err=>console.log('err in id',err))
} 
useEffect(()=>{
    if (params.id >0){
        console.log('im in form id=',params.id)
        fetchFriend();
    } 
},[params.id])


const handleChanges=(e)=>{
    setFriendData({
        ...friendData,
        [e.target.name]:e.target.value
    })
    console.log('frienddata=',friendData);
}

const handleSubmit=(e)=>{
e.preventDefault();
if(!params.id >0){
    console.log('im here for post friend')
    postFriend();
    props.setAddFriend(true)
}else{
    //Modify and update request
    console.log('im here for edit friend')
    putFriend();
}
}

const putFriend=()=>{
axiosWithAuth()
.put(`/api/friends/${params.id}`,friendData)
.then(res=>{
    console.log('res after update',res)
    history.push('/friends')
})
.catch(err=>console.log('err in update',err))

}

const postFriend=()=>{
axiosWithAuth()
.post('/api/friends',friendData)
.then(res=>{
    console.log('res in add friend=',res)
    history.push('/friends')
})
.catch(err=>console.log('err in add',err))
}

 
return(
    <>
     <h4>Do you like to add a friend ?</h4>
     {loading ? "Please wait..." :
     <Form className="addFriend" onSubmit={handleSubmit}>
       <Label htmlFor="name">Friend's Name</Label>
       <Input id="name"
       name="name"
       value={friendData.name}
       onChange={handleChanges}
       placeholder="Enter your friend's name"
       />  
        <Label htmlFor="age">Friend's Age</Label>
       <Input id="age"
       type="number"
       name="age"
       value={friendData.age}
       onChange={handleChanges}
       placeholder="Enter your friend's age"
       />  
        <Label htmlFor="name">Friend's Email</Label>
       <Input id="email"
       type="email"
       name="email"
       value={friendData.email}
       onChange={handleChanges}
       placeholder="Enter your friend's email"
       />   
      <Button color="primary">
          {params.id>0 ? "Edit Friend!" : "Add Friend"}
      </Button> 
     </Form>
    }
    </>
)
}
export default FriendForm;