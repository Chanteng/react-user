import React, { useState } from "react";
import User from "./User";
import {connect} from "react-redux"


function UserList(props) {
  return (
    <div>
      {props.users.map((user) => {
        console.log(user.id);
        return (
          <User
            user={user}
            key={user.id}
					//	editUser={props.editUser}
          />
        );
      })}
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    users: state.users,
    users: state.usersState.users
  }
}

export default connect(mapStateToProps) (UserList);