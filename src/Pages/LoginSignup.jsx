import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h1>Sign Up</h1>
        <div>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p>
          Already have an account? <span>Login here</span>
        </p>
        <div className="checkbox-container">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
