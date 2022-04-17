import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/apicalls";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  //u can use object instead of separate email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("Invalid Credentials!!!");
  const dispatch = useDispatch();
  const { isFectching, error } = useSelector((state) => state.user);
  // console.log(isFectching, error);

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); //bcoz when input field is filled the page refreshes so to avoid it
    login(dispatch, { email, password });
    navigate("/profile");
  };

  return (
    <>
      <h2>Login Form</h2>

      <form>
        <div className="container">
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            onChange={handleEmail}
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={handlePassword}
          />

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            <Link to="/signup">New User</Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
