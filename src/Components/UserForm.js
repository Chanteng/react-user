import React, { useState } from "react";
import { v4 as uuid } from "uuid";
//importing the action
import { addUser } from "../actions/userAction"
import { connect } from "react-redux"



function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && name && gen) {
      let newUser = {
        name: name,
        email: email,
        gen: gen,
        id: uuid(),
      };

      props.addNewUser(newUser);

      setName("");
      setEmail("");
      setGen("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
    <input type="text" placeholder="Gen" value={gen} onChange={(e) => setGen(e.target.value)}  /> <br />

      <input type="submit" />
    </form>
  );
}

//to loop through to the props
const mapDispatchToProps = {
  addNewUser: addUser
};

export default connect(null, mapDispatchToProps) (UserForm);