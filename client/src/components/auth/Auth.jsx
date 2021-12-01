import React, { useState } from 'react';
import './auth.css';

const Auth = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lasttName, setLasttName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(true)

    const title = () => {
        return !login ? "SignUp": "Login"
    }
    

    const loginToggle = (e) => {
        e.preventDefault()
        
        setLogin(!login)

        setEmail("")
        setPassword("")
        setFirstName("")
        setLasttName("")
    }

    const signupFields = () => !login ?
    (
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <br />
            <input type = 'text'
            id = 'firstName'
            value = {firstName}
            onChange = { (e) => setFirstName(e.target.value) } />
            <br />
            <label htmlFor='lastName'>Last Name:</label>
            <br />
            <input type = 'text'
            id = 'lastName'
            onChange = { (e) => setLasttName(e.target.value) } />
        </div>
    ) : null

    return(
        <div>
            <form>
                
                <br />
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br />
                <input type = 'text' 
                id = 'email' 
                value = {email} 
                onChange = { (e) => setEmail(e.target.value) } />
                
                <br />
                
                <label htmlFor='password'>Password:</label>
                <br />
                <input type = 'password' 
                id = 'password' 
                value = {password} 
                onChange = { (e) => setPassword(e.target.value) } />
                <br />
                <button type = 'submit'>Submit</button>
                <br />
                <br />
                <br />
                <button onClick = {loginToggle}>Login | Sign Up</button>
            </form>
        </div>
    )
}

export default Auth