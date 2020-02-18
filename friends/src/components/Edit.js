import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card, Button } from "reactstrap";

const button = {
	color: "#77ad17",
	borderRadius: "25px",
	width: "50%",
	margin: "1% auto",
	fontSize: "20px",
	border: "2px solid #77ad17",
};

const card = {
	margin: "5% auto",
	height: "350px",
	width: "133%",
	borderTop: "5px solid",
	borderBottom: "5px solid",
};
const title = {
	color: "#77ad17",
	textShadow: "-1px 0 gold, 0 1px black, 1px 0 black, 0 -1px black",
};

const Edit = () => {
	const friendLayout = {
		name: "",
		age: "",
		email: "",
		id: Date.now(),
	};

	const [data, setData] = useState(friendLayout);

	const handleChanges = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const add = e => {
		e.preventDefault();
		setData({ ...data });
		axiosWithAuth()
			.post("friends", data)
			.then(res => {
				console.log("API INFO HERE", res);
				setData(friendLayout);
			})
			.catch(error => {
				console.log("None for You", error);
			});
	};


	return (
		<section className="formField">
			<section>
				<form onSubmit={add} className="forms">
					<Card color="warning" outline style={card}>
						<h1 style={title}>Add A Friend</h1>
						<input className="input" type="text" placeholder="Name" name="name" onChange={handleChanges} />
						<input className="input" type="text" placeholder="Age" name="age" onChange={handleChanges} />
						<input className="input" type="Email" placeholder="Email" name="email" onChange={handleChanges} />
						<Button color="warning" style={button}>
							Add
						</Button>
					</Card>
				</form>
			</section>
		</section>
	);
};

export default Edit;
