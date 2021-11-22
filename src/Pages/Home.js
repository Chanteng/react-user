import React, { useEffect, useState } from "react";
import UserForm from "../Components/UserForm";
import UserList from "../Components/UserList";
import {getAllUsers} from "../actions/userAction"
import {connect} from "react-redux"



function Home(props) {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    props.getAllUsers();
  }, [])


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


export default connect(null, mapDispatchToProps) (Home);