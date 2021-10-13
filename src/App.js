import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }


  function editUser(newDetails, userId) {
    const editedUser = users.map((user) => {
      if (userId === user.id) {
        return newDetails;
      } else {
        return user;
      }
    });

    setUsers(editedUser);
  }


  function deleteUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredUsers = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredUsers);
  }

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser ={editUser}  />
    </div>
  );
}

export default App;