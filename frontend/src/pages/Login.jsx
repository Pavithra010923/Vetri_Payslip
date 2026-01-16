import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/Images/vislogo.png";
import loginillus from "../assets/Images/loginillus.png";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      alert("Email & Password Required");
      return;
    }

    try {
      const res = await API.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("employeeId", res.data.employeeId);

      alert("Login Successful ");
      navigate("/payslip");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="login-container">
      <div>
        <div className="login-row1">
          <div className="login-row1-image">
            <img src={logo} alt="logo" />
          </div>
          <div className="login-row1-content">
            <h1>VETRI IT SYSTEMS</h1>
            <p>-Employee Payslip-</p>
          </div>
        </div>
        <div className="login-row2">
          <img src={loginillus} alt="illustration" />
        </div>
      </div>

      <div className="login-col2">
        <h1>Hello!</h1>
        <h1>Login to Continue</h1>

        <div className="l1">
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <span><i className="fa-solid fa-user"></i></span>
        </div>

        <div className="l1">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span><i className="fa-solid fa-lock"></i></span>
        </div>

        <div className="l2">
          <div>
            <input type="radio" /> Remember me
          </div>
          <div>
            <Link to="/register">Forget Password ?</Link>
          </div>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
