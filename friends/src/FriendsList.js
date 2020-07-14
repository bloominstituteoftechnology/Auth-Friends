import React,{useState, useEffect} from 'react';
import {axiosWithauth} from "./api/axiosWithAuth";


const FriendsList = props =>{
    const [data, setData] = useState([{name:''}]);
    useEffect( ()=>{
        axiosWithauth().get('http://localhost:5000/api/friends')
            .then(res=>{
                console.log(res)
                setData(res.data);
                console.log(`data is ${data}`);
            })
            .catch(err=>{
                console.log(err);
            });
    },[])

 const checkData = () =>{
        console.log(data);
 }

 const addData = () =>{
        setData(
            [...data,
            {name:'daniel'}]
            );

 }


    return(
        <div>
            <>
                {data.map(item=>{
                    return(
                        <div className="namer">{item.name}</div>
                    )
                })}

                </>
            <button onClick={checkData}>checker</button>
            <button onClick={addData}>add data</button>

        </div>
    )
}

export default FriendsList;
