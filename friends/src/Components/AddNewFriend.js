import React, { useState } from "react";

import "semantic-ui-css/semantic.min.css";
import { Form, Input, Button } from "semantic-ui-react";

const NewFriend = props => {
  const [name, setName] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addFriend(name);
  };

  return (
    <div className="new-friend">
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="name"
          value={name.name}
        />
        <Input
          onChange={handleChange}
          type="text"
          name="age"
          placeholder="age"
          value={name.age}
        />

        <Input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="email"
          value={name.email}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default NewFriend;
