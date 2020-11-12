import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login(props) {
	const [form, setForm] = useState({
		username: "Lambda School",
		password: "i<3Lambd4",
	});
	const { handleLogin } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogin(form.username, form.password);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="loginUsername">
					<Form.Label>Login</Form.Label>
					<Form.Control
						name="username"
						value={form.username}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="loginPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						value={form.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button type="submit">Login</Button>
			</Form>
		</Container>
	);
}

export default Login;
