import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">

      {/* Navbar */}
      <nav className="landing-navbar">
        <div className="landing-container navbar-content">

          <a href="/" className="logo">
            Future<span>Map</span>
          </a>

          <div className="nav-links">
            <a href="#explore">Explore</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
          </div>

          <div className="nav-actions">
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="primary-btn nav-start-btn"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <main className="hero-section">
        <div className="landing-container hero-content">

          {/* Left */}
          <section className="hero-text">

            <div className="hero-badge">
              <Sparkles size={15} />
              <span>Find your direction</span>
            </div>

            <h1>
              Your future.
              <br />
              Your <span>path.</span>
            </h1>

            <p className="hero-description">
              Discover the right major, explore your interests,
              and build a personalized path toward the future you want.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => navigate("/login")}
              >
                Start Your Journey
                <ArrowRight size={18} />
              </button>

              <button className="secondary-btn">
                Explore Majors
              </button>

            </div>

            <div className="hero-stats">

              <div className="stat">
                <strong>10K+</strong>
                <span>Students</span>
              </div>

              <div className="stat-divider" />

              <div className="stat">
                <strong>50+</strong>
                <span>Majors</span>
              </div>

              <div className="stat-divider" />

              <div className="stat">
                <strong>1</strong>
                <span>Clear Direction</span>
              </div>

            </div>

          </section>

          {/* Right */}
          <section className="hero-visual">

            <div className="visual-card">

              <div className="yellow-circle" />
              <div className="green-circle" />

              <div className="visual-content">

                <div className="compass-icon">
                  <Compass
                    size={52}
                    strokeWidth={1.5}
                  />
                </div>

                <h2>
                  Find your direction
                </h2>

                <p>
                  Understand what fits you and turn
                  your interests into a meaningful path.
                </p>

                <div className="dots">
                  <span className="dot green-dot" />
                  <span className="dot yellow-dot" />
                  <span className="dot light-dot" />
                </div>

              </div>
            </div>

            <div className="floating-card explore-card">
              ✦ Explore
            </div>

            <div className="floating-card journey-card">
              Your journey →
            </div>

          </section>

        </div>
      </main>

      {/* Bottom Banner */}
      <section className="landing-container bottom-section">

        <div className="bottom-banner">

          <div>
            <strong>
              Not sure where to start?
            </strong>

            <p>
              Take the assessment and let FutureMap guide you.
            </p>
          </div>

          <button
            onClick={() => navigate("/login")}
          >
            Take Assessment
            <ArrowRight size={17} />
          </button>

        </div>

      </section>

    </div>
  );
}

export default LandingPage;