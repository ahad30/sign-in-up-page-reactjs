import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
       <div className="auth-form-container ">
                <h2>Sign in</h2>
                <h3 class="text-center  mt-3 mb-3">Welcome Back</h3>
                <form className="login-form shadow" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" class="shadow" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" class="shadow" />
                    <div class="form-check">
                   <input type="checkbox" class="mx-1"  id="exampleCheck1"/>
                   <label  htmlfor="exampleCheck1">Keep me signed in</label>
                   </div>
                    <button type="submit" class="mt-3 rounded fs-4">Sign in</button>
                </form>
                <button className="link-btn text-dark" onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign up here.</button>
                <h4>OR</h4>
                <span className="shadow">Continue with :
                <a href="#">
                 <img src="assets/img/ahad10.png" width="50px" height="50px"/></a>
                 <a href="#">
                <img src="assets/img/download.png" width="30px" height="28px"/></a>
                </span>
            </div>
              
    )
}