import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import api from "../services/api";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-wrapper">

        {/* Left Side */}
        <div className="register-intro">
          <a href="/" className="register-logo">
            Future<span>Map</span>
          </a>

          <div className="register-intro-content">
            <div className="register-badge">
              <span>✦</span>
              Start your journey
            </div>

            <h1>
              Your future
              <br />
              starts <span>here.</span>
            </h1>

            <p>
              Create your FutureMap account and start exploring
              your interests, majors, and future career path.
            </p>
          </div>

          <div className="register-intro-footer">
            <span>FutureMap</span>
            <span>Find your direction →</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="register-form-section">
          <div className="register-form-container">

            <div className="mobile-register-logo">
              <a href="/" className="register-logo">
                Future<span>Map</span>
              </a>
            </div>

            <div className="register-heading">
              <h2>Create your account</h2>

              <p>
                Join FutureMap and start finding your direction.
              </p>
            </div>

            <form
              className="register-form"
              onSubmit={handleRegister}
            >

              {/* Name */}
              <div className="register-form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <div className="register-input-wrapper">
                  <User size={18} />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="register-form-group">
                <label htmlFor="email">
                  Email
                </label>

                <div className="register-input-wrapper">
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

              {/* Password */}
              <div className="register-form-group">
                <label htmlFor="password">
                  Password
                </label>

                <div className="register-input-wrapper">
                  <Lock size={18} />

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="register-form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <div className="register-input-wrapper">
                  <Lock size={18} />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Repeat your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="register-error">
                  {error}
                </div>
              )}

              {success && (
                <div className="register-success">
                  {success}
                </div>
              )}

              <button
                type="submit"
                className="register-submit"
                disabled={loading}
              >
                {loading ? (
                  "Creating account..."
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

            </form>

            <div className="login-link">
              Already have an account?

              <button
                type="button"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;