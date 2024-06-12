import axios from 'axios';
import { useState } from 'react';
export default function UserLogin() {
    const [rollno, setRollno] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3000/login', {
          rollno,
          password
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div className="Login">
    
      <form className="loginContainer" onSubmit={handleLogin}>
      <h1 className="formTitle">User Login</h1>
        <div className="form-group">
          <label for="rollno">Enter Your Roll Number</label>
          <input
            type="text"
            className="form-control "
            id="rollno"
            placeholder="Roll Number"
            required = {true}
            onChange={(e) => setRollno(e.target.value)}
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
            required = {true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary LoginButton">
          Submit
        </button>
        <a href='/register' className="registerLink"> Don't have an account ? Click here to Register </a>
      </form>
      
    </div>
  );
}