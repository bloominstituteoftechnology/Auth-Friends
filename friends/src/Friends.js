import React, { useState } from "react";
import { axiosAuth } from "./axios/axioswithauth";

export default function Friends() {
	const [data, setData] = useState({
		allFriends: [],
		id: "",
		name: "",
		email: "",
		age: "",
	});

	const getData = () => {
		axiosAuth()
			.get("/friends")
			.then((res) => {
				setData({ allFriends: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getData();

	return (
		<div>
			{data.allFriends.map((item, index) => {
				return (
					<div key={index}>
						<p>{item.name}</p>
						<p>{item.email}</p>
						<p>{item.age}</p>
					</div>
				);
			})}
		</div>
	);
}    
            