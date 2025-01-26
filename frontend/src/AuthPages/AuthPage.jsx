import { useState } from "react";
import "./AuthPage.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

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

const InputField = ({ type, placeholder, setVal }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        required
        onChange={(e) => setVal(e.target.value)}
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [fullName, setfullName] = useState("");

  const dispatch = useDispatch();
  const handleSignUpButton = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      userName,
      fullName,
    };

    try {
      const response = await fetch("http://localhost:3000/v1/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response from backend:", result);
      dispatch(login(result));
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };
  return (
    <div className="login-container">
      <h2 className="form-title">Sign Up</h2>
      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email" setVal={setEmail} />
        <InputField type="text" placeholder="Username" setVal={setUsername} />
        <InputField type="name" placeholder="Full Name" setVal={setfullName} />
        <InputField
          type="password"
          placeholder="Password"
          setVal={setPassword}
        />
        <button
          type="submit"
          className="login-button"
          onClick={handleSignUpButton}
        >
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogInButton = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/v1/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response from backend:", result);
      dispatch(login(result));
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log In</h2>
      <form action="#" className="login-form">
        <InputField
          type="email"
          placeholder="Email address"
          setVal={setEmail}
        />
        <InputField
          type="password"
          placeholder="Password"
          setVal={setPassword}
        />
        <button
          type="submit"
          className="login-button"
          onClick={handleLogInButton}
        >
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
