import React, { useState } from "react";
import User from "./User";
import {connect} from "react-redux"


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

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps) (UserList);