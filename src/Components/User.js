import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditUser from "./EditUser";
import { deleteUser } from "../actions/userAction"
import { connect } from "react-redux"



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
      <h3>{user.gen}</h3>

      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>

      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

    
      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Please Edit Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditUser
            user={user}
            toggleModal={toggleModal}
          />
        </Modal.Body>

      </Modal>

    </div>
  );
}

const mapDispatchToProps = {
  deleteUser,
}

export default connect(null, mapDispatchToProps)(User);