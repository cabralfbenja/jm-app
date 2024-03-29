import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass);
    };
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" id="name" name="name"/>
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("login")}>¿Ya tienes cuenta? Ingresa aquí</button>
        </div>
    );
}