import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


function User(props) {
  const user = props.user;

  //state to handle modal
  const [showModal, setShowModal] = useState(false);

  //function to toggle modal
  function toggleModal() {
    
    setShowModal(!showModal);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

    </div>
  );
}

export default User;