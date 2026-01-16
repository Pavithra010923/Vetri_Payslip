import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/Images/vislogo.png';
import loginillus from '../assets/Images/loginillus.png';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';
import bcrypt from 'bcryptjs';

function Register() {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (
      !formData.employeeId ||
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(formData.password, 10);
      await API.post("/api/auth/register", {
        employeeId: formData.employeeId,
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
      });

      alert("Registered successfully ✅");
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Registration failed ❌");
      console.error(error);
    }
  };

  return (
    <div className='login-container'>
      <div>
        <div className='login-row1'>
          <div className='login-row1-image'>
            <img src={logo} alt="logo" />
          </div>
          <div className='login-row1-content'>
            <h1>VETRI IT SYSTEMS</h1>
            <p>- Employee Payslip -</p>
          </div>
        </div>

        <div className='login-row2'>
          <img src={loginillus} alt="illustration" />
        </div>
      </div>

      <div className='login-col2'>
        <h1>Hello!</h1>
        <h1>Register Here</h1>

        <div className='l1'>
          <input
            type="text"
            placeholder='Employee ID'
            value={formData.employeeId}
            onChange={(e) =>
              setFormData({ ...formData, employeeId: e.target.value })
            }
          />
          <span><i className="fa-solid fa-user"></i></span>
        </div>

        <div className='l1'>
          <input
            type="text"
            placeholder='Employee Name'
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <span><i className="fa-solid fa-user"></i></span>
        </div>

        <div className='l1'>
          <input
            type="email"
            placeholder='Email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <span><i className="fa-solid fa-envelope"></i></span>
        </div>

        <div className='l1'>
          <input
            type="password"
            placeholder='Password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span><i className="fa-solid fa-lock"></i></span>
        </div>

        <button onClick={handleRegister}>Register</button>

        <p style={{ marginTop: "10px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
