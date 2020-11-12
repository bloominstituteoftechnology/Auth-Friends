import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NewFriend(props) {
	const id = useSelector((state) => state.friends.length + 1);
	const { handleNewFriend } = props;

	const initForm = {
		name: "",
		age: "",
		email: "",
	};
	const [form, setForm] = useState(initForm);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleNewFriend({ ...form, id: id });
		setForm(initForm);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="newName">
					<Form.Label>Name</Form.Label>
					<Form.Control name="name" value={form.name} onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="newAge">
					<Form.Label>Age</Form.Label>
					<Form.Control
						name="age"
						type="number"
						value={form.age}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="newEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="email"
						value={form.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
		</Container>
	);
}

export default NewFriend;
