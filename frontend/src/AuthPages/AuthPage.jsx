import { useState } from "react";
import "./AuthPage.css";
const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        <img src="google.svg" alt="Google" className="social-icon" />
        Google
      </button>
      <button className="social-button">
        <img src="apple.svg" alt="Apple" className="social-icon" />
        Apple
      </button>
    </div>
  );
};

const InputField = ({ type, placeholder, icon }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        required
      />
      {/* <i className="material-symbols-rounded">{icon}</i> */}
      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="material-symbols-rounded eye-icon"
        >
          {isPasswordShown ? "don't show" : "show"}
        </i>
      )}
    </div>
  );
};

const SignUpSection = ({ isLogin, setIsLogin }) => {
  return (
    <div className="login-container">
      <h2 className="form-title">Sign Up</h2>
      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="text" placeholder="Username" icon="mail" />
        <InputField type="name" placeholder="Full Name" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />
        <button type="submit" className="login-button">
          Sign Up
        </button>
      </form>
      <p className="signup-prompt">
        Already have an account?{" "}
        <div onClick={() => setIsLogin(true)}>Log In</div>
      </p>
    </div>
  );
};

const LoginSection = ({ isLogin, setIsLogin }) => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log In</h2>
      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p className="signup-prompt">
        Don't have an account?{" "}
        <div onClick={() => setIsLogin(false)}>Sign up</div>
      </p>
    </div>
  );
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLogin ? (
        <LoginSection isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <SignUpSection isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  );
}
