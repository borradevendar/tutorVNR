import axios from "axios";
import React, { useState } from "react";
export default function TutorLogin() {
  const [rollno, setRoll] = useState("");
  const [password, setPassword] = useState("");

  const handleTutorLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:3000/tutor/login', {
        rollno,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Login">
      <form className="loginContainer" onSubmit={handleTutorLogin}>
        <h1 className="formTitle">Tutor Login</h1>
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
        <a href="/tutor/register" className="registerLink">
          {" "}
          Don't have an account ? Click here to Register{" "}
        </a>
      </form>
    </div>
  );
}
