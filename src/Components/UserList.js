import React, { useState } from "react";
import User from "./User";
import { Modal, Button } from "react-bootstrap";

function UserList(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            deleteUser={props.deleteUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;