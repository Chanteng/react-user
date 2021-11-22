import React from 'react'
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux"
//import { registerWithEmail } from "../actions/userAction"
import {registerWithEmail, loginWithGoogle} from "../actions/authAction"


function Register(props) {

    if (!props.auth.isLoaded) return null;
	if (!props.auth.isEmpty) props.history.push("/");


    const handleSubmit=(e)=>{
        e.preventDefault()
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        props.registerWithEmail(email, password);
    }

    return (
        <>

        <h1>Register Here!</h1>
            
        <Form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" placeholder="Password" />
            </div>
            <hr />

            <Button type="submit">Join</Button>

            <hr />

            <button onClick={props.loginWithGoogle}>
				<img src="http://pngimg.com/uploads/google/google_PNG19644.png" width="100" />
			</button>
        </Form>
        </>
    )
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	}
}

const mapDispatchToProps = {
    registerWithEmail, loginWithGoogle
}

export default connect(mapStateToProps, mapDispatchToProps) (Register);
