export default function UserLogin() {
  return (
    <div className="Login">
    
      <form className="loginContainer">
      <h1 className="formTitle">User Login</h1>
        <div className="form-group">
          <label for="rollno">Enter Your Roll Number</label>
          <input
            type="text"
            className="form-control "
            id="rollno"
            placeholder="Roll Number"
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
          />
        </div>
        <button type="submit" className="btn btn-primary LoginButton">
          Submit
        </button>
      </form>
    </div>
  );
}
