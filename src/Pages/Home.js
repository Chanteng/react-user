import React, { useEffect, useState } from "react";
import UserForm from "../Components/UserForm";
import UserList from "../Components/UserList";
import {getAllUsers} from "../actions/userAction"
import {connect} from "react-redux"
import {Button} from "react-bootstrap"
import {logoutUser} from "../actions/authAction"


function Home(props) {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    props.getAllUsers();
  }, [])


  return (
    <div>
     
      <UserForm />
      <UserList/> <br />
      <Button onClick={props.logoutUser} >Log out</Button>
    </div>
  );
}


const mapDispatchToProps = {
	getAllUsers, logoutUser
};


export default connect(null, mapDispatchToProps) (Home);