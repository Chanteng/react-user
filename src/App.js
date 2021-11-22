import React, { useState, useEffect } from "react";
import "./App.css"
import {getAllUsers} from "./actions/userAction"
import {connect} from "react-redux"
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";


function App(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    props.getAllUsers();
  }, [])

  // function addUser(user) {
  //   setUsers([...users, user]);
  // }


  // function editUser(newDetails, userId) {
  //   const editedUser = users.map((user) => {
  //     if (userId === user.id) {
  //       return newDetails;
  //     } else {
  //       return user;
  //     }
  //   });

  //   setUsers(editedUser);
  // }


  // function deleteUser(userId) {

  //   const filteredUsers = users.filter((user) => {
  //     return userId !== user.id;
  //   });

  //   setUsers(filteredUsers);
  // }

  return (
    <div>
      <UserForm  />
      <UserList  />
    </div>
  );
}

const mapDispatchToProps = {
  getAllUsers,
}

export default connect(null, mapDispatchToProps) (App);