export default function LoginPage() {
  return (
    <div className="loginContainer">
      <div className="buttonContainer">
        <a href="/">
          <button className="bg-dark text-light signInButton">
            SignIn as a User
          </button>
        </a>
        <a href="/">
          <button className="bg-dark text-light signInButton">
            SignIn as a Tutor
          </button>
        </a>
      </div>
    </div>
  );
}
