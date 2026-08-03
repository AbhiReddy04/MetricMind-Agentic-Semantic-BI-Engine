import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
       <h1>📊 MetricMind</h1>
        <p>Agentic Semantic BI Engine</p>
        

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button onClick={() => navigate("/dashboard")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;