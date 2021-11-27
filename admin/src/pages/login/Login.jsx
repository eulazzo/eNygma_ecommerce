import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="Container">
      <div className="Wrapper">
        <h1 className="Title">SIGN IN</h1>
        <form className="Form">
          <input
            className="Input"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="Input"
            placeholder="Password"
            type="password"
          ></input>
          <button className="button" onClick={loginHandler}>
            LOGIN
          </button>
          <p className="p">DON'T YOU REMEMBER THE PASSWORD?</p>
          <p className="p">CREATE A NEW ACCOUNT</p>
        </form>
      </div>
    </div>
  );
};
