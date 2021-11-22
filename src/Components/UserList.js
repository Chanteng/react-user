import React, { useState } from "react";
import User from "./User";
import {connect} from "react-redux"


function UserList(props) {
  return (
    <div>
     return (
    <div>
      {props.users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            // deleteUser={props.deleteUser}
            // editUser={props.editUser}
          />
        );
      })}
    </div>
  );
    </div>
  );
}



const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
    // users: state.users.users
  }
}

export default connect(mapStateToProps) (UserList);