export default function TutorRegister() {
  return (
    <div>
      <form className="registerContainer">
        <h1 className="formTitle">Register as Tutor</h1>
        <div className="form-group">
          <label for="name">Enter Your Name</label>
          <input
            type="text"
            className="form-control "
            id="name"
            placeholder="Name"
            required={true}
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
          />
        </div>
        <button type="submit" className="btn btn-primary LoginButton">
          Submit
        </button>
      </form>
    </div>
  );
}
