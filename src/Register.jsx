import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 class="mb-4">Sign up</h2>
        <form className="register-form shadow " onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" class="shadow"/>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" class="shadow" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" class="shadow" />
            <label htmlFor="password">confirm password</label>
            <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="********" id="password" name="password" class="shadow" /> 
            <button type="submit" class="mt-3 rounded fs-4">Sign up</button>    
        </form>
        <button className="link-btn text-dark" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in here.</button>
        <h4>OR</h4>
                <span className="shadow">Continue with :
                <a href="#">
                 <img src="assets/img/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png" width="50px" height="50px"/></a>
                 <a href="#">
                <img src="assets/img/download.png" width="30px" height="28px"/></a>
                </span>

    </div>
    )
}