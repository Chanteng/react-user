import React, { useState } from "react";
import User from "./User";


function UserList(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;