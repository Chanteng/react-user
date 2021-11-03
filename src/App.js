import React, { useEffect, useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import "./App.css"
import {getAllUsers} from "./actions/userAction"
import {connect} from "react-redux"


function App(props) {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    props.getAllUsers();
  }, [])

  // // function addUser(user) {
  // //   setUsers([...users, user]);
  // // }


  // function editUser(newDetails, userId) {
  //   const editedUser = users.map((user) => {
  //     if (userId === user.id) {
  //       return newDetails;
  //     } else {
  //       return user;
  //     }
  //   });

  //   setUsers(editUser);
  // }


  // function deleteUser(userId) {
  //   //loops through the users state and removes the user with the same id
  //   const filteredUsers = users.filter((user) => {
  //     return userId !== user.id;
  //   });

  //   //sets the users state to the filtered users array
  //   setUsers(filteredUsers);
  // }

  return (
    <div>
      <UserForm />
      <UserList/>
    </div>
  );
}

const mapDispatchToProps = {
	getAllUsers,
};


export default connect(null, mapDispatchToProps) (App);