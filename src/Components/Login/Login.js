import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../redux/actions/usersAction";
import "./Style.css";
function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const loginUser = {
    email,
    password,
  };
  const handleLogin = () => {
    // dispatch(login(loginUser))
    //   .then(() => {
    //     localStorage.setItem("auth", true);
    //     localStorage.setItem("user", JSON.stringify(loginUser));
    //     navigate("/");
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="container">
        <div
          className="brand-logo"
          style={{
            background: "url('/images/deliveryLogo.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="brand-title">LOGIN</div>
        <div className="inputs">
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="example@test.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Min 6 charaters long"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="above__button">
            <button onClick={handleLogin}>LOGIN</button>
          </div>
          <Link to="/register">
            <p className="register__link">
              Do not have an account? Register here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
