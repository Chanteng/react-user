import React from 'react'
import { Form, Button } from "react-bootstrap";

function Register() {
    return (
        <>

        <h1>Register Here!</h1>
            
        <Form>
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
        </Form>
        </>
    )
}

export default Register
