import React from 'react';

function LoginPage() {
  return (
    <div className="loginContainer">
      <div className="buttonContainer">
        <a href="login">
          <button className="bg-dark text-light signInButton">
            SignIn as a User
          </button>
        </a>
        <a href="/tutor/login">
          <button className="bg-dark text-light signInButton">
            SignIn as a Tutor
          </button>
        </a>
      </div>
    </div>
  );
}
export default LoginPage;

