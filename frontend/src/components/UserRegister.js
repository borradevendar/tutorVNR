import React, { useState } from "react";
import axios from 'axios';
export default function UserRegister() {
    const [name, setName] = useState('');
    const [rollno, setRoll] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserRegister= async (e)=>{
      try {
        const response = await axios.post('http://localhost:3000/register', {
          name,
          rollno,
          email,
          password
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };


    return (
      <div>
        <form className="registerContainer" onSubmit={handleUserRegister}>
          <h1 className="formTitle">Register as User</h1>
          <div className="form-group">
            <label for="name">Enter Your Name</label>
            <input
              type="text"
              className="form-control "
              id="name"
              placeholder="Name"
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="dummyContainer"></div>
          <div className="form-group">
            <label for="rollno">Enter Your Roll Number</label>
            <input
              type="text"
              className="form-control "
              id="rollno"
              placeholder="Roll Number"
              required={true}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
          <div className="dummyContainer"></div>
          <div className="form-group">
            <label for="email">Enter Your Email</label>
            <input
              type="email"
              className="form-control "
              id="email"
              placeholder="Enter your Email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="dummyContainer"></div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary LoginButton">
            Submit
          </button>
        </form>
      </div>
    );
  }
  