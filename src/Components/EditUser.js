import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


function EditUser(props) {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.number);
  const [gen, setGen] = useState(props.user.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenChange = (e) => {
    setGen(e.target.value);
  };

  function handleSubmit() {
    
    let editedUser = {
      name: name,
      email: email,
      gen: gen,
      id: props.user.id,
    };

    props.editUser(editedUser, props.user.id);
    props.toggleModal();
  }


  return ( 

    <div>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="text"
          placeholder="Enter Number"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control
          name="text"
          placeholder="Enter Location"
          value={gen}
          onChange={(e) => handleGenChange(e)}
        />

        <Button onClick={() => handleSubmit()}>Save</Button>
      </Form.Group>
    </Form>
  </div>

  );
}

export default EditUser;
