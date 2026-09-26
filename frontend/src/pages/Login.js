import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, Mail } from "lucide-react";
import api from "../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* Left Side */}
        <div className="login-intro">
          <a href="/" className="login-logo">
            Future<span>Map</span>
          </a>

          <div className="login-intro-content">
            <div className="intro-badge">
              <span>✦</span>
              Your journey starts here
            </div>

            <h1>
              Find your path.
              <br />
              Build your <span>future.</span>
            </h1>

            <p>
              Explore your interests, discover the right major,
              and create a roadmap for your future with FutureMap.
            </p>
          </div>

          <div className="login-intro-footer">
            <span>FutureMap</span>
            <span>Find your direction →</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-form-section">
          <div className="login-form-container">

            <div className="mobile-logo">
              <a href="/" className="login-logo">
                Future<span>Map</span>
              </a>
            </div>

            <div className="login-heading">
              <h2>Welcome back!</h2>

              <p>
                Log in to continue your FutureMap journey.
              </p>
            </div>

            <form
              className="login-form"
              onSubmit={handleLogin}
            >
              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <div className="input-wrapper">
                  <Mail size={18} />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password
                </label>

                <div className="input-wrapper">
                  <Lock size={18} />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="login-error">
                  {error}
                </div>
              )}

              <div className="form-options">
                <label className="remember-option">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot-password"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="login-submit"
                disabled={loading}
              >
                {loading ? (
                  "Logging in..."
                ) : (
                  <>
                    Login
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="register-link">
              Don't have an account?
              <button
                type="button"
                onClick={() => navigate("/register")}
              >
                Create one
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;