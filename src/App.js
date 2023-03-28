import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";


function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <> 
      <nav  class="navbar navbar-expand-lg navbar-light bg-white shadow ">
        <div class="container">
          <a class="navbar-brand" href="#home">
            <img src="assets/img/Main File wtih slogan.png" height="50px" width="150px"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link mx-4" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-4" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-4" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-4" href="#blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-4" href="#career">Career</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-4" href="#contact">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <div class="container">
      <div className="row ">
      <div className="col-6">     
       <div class="ahad10">
          <img class="mx-5 my-5 i" src="assets/img/login-form-img.png" height="350px" width="400px"/>
        </div>
      </div>
        <div className="App col-6">
          {currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
        </div>
        </div>
        </div>
        </>
  )
}

export default App;