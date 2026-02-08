import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";


function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const res = await API.post("login/", form);
      if (res.data.success) {
        navigate("/home");
      } else {
        alert("Invalid");
      }
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input name="username" placeholder="Username" onChange={change} />
      <input name="password" type="password" placeholder="Password" onChange={change} />
      <button onClick={login}>Login</button>
      <p onClick={() => navigate("/register")} className="link-text">
        Create Account
      </p>
    </div>

  );
}

export default Login;

