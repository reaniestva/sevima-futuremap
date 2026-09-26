import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Compass,
  LayoutDashboard,
  LogOut,
  Map,
  Menu,
  MessageCircle,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import "./Dasboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const userName = user.name || "Student";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-page">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`dashboard-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <div className="sidebar-top">

          <div className="sidebar-header">
            <a href="/dashboard" className="dashboard-logo">
              Future<span>Map</span>
            </a>

            <button
              className="sidebar-close"
              onClick={closeSidebar}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="sidebar-nav">

            <button className="sidebar-link active">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>

            <button
              className="sidebar-link"
              onClick={() => navigate("/roadmap")}
            >
              <Map size={18} />
              <span>My Roadmap</span>
            </button>

            <button
              className="sidebar-link"
              onClick={() => navigate("/learn")}
            >
              <BookOpen size={18} />
              <span>Learn & Prep</span>
            </button>

            <button
              className="sidebar-link"
              onClick={() => navigate("/mentor")}
            >
              <MessageCircle size={18} />
              <span>AI Mentor</span>
            </button>

          </nav>
        </div>

        <div className="sidebar-bottom">

          <div className="sidebar-user">
            <div className="user-avatar">
              {userName.charAt(0).toUpperCase()}
            </div>

            <div className="sidebar-user-info">
              <strong>{userName}</strong>
              <span>Student</span>
            </div>
          </div>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            <span>Log out</span>
          </button>

        </div>
      </aside>

      {/* Main */}
      <main className="dashboard-main">

        {/* Topbar */}
        <header className="dashboard-topbar">

          <button
            className="mobile-menu-button"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={21} />
          </button>

          <div className="topbar-right">

            <button
              className="mentor-topbar-button"
              onClick={() => navigate("/mentor")}
            >
              <MessageCircle size={17} />
              <span>Ask AI Mentor</span>
            </button>

            <div className="topbar-avatar">
              {userName.charAt(0).toUpperCase()}
            </div>

          </div>

        </header>

        <div className="dashboard-content">

          {/* Greeting */}
          <section className="dashboard-heading">

            <div>
              <span className="dashboard-eyebrow">
                <Sparkles size={14} />
                Your journey continues
              </span>

              <h1>
                Hey, {userName}!
              </h1>

              <p>
                Let's keep building your path toward the future.
              </p>
            </div>

            <button
              className="assessment-button"
              onClick={() => navigate("/assessment")}
            >
              <Target size={17} />
              Take Assessment
            </button>

          </section>

          {/* Main Grid */}
          <section className="dashboard-grid">

            {/* Direction Card */}
            <div className="direction-card">

              <div className="direction-content">

                <div className="card-label">
                  <Compass size={16} />
                  Your Direction
                </div>

                <h2>
                  Discover what
                  <br />
                  fits <span>you.</span>
                </h2>

                <p>
                  Take the interest assessment to discover
                  majors that match your interests and strengths.
                </p>

                <button
                  className="direction-button"
                  onClick={() => navigate("/assessment")}
                >
                  Start Assessment
                  <ArrowRight size={17} />
                </button>

              </div>

              <div className="direction-decoration">
                <div className="direction-circle circle-one" />
                <div className="direction-circle circle-two" />

                <div className="direction-icon">
                  <Compass size={55} strokeWidth={1.4} />
                </div>
              </div>

            </div>

            {/* Progress Card */}
            <div className="progress-card">

              <div className="card-top">

                <div>
                  <span className="small-label">
                    Overall Progress
                  </span>

                  <h3>Getting started</h3>
                </div>

                <div className="progress-icon">
                  <Target size={19} />
                </div>

              </div>

              <div className="progress-value">
                <strong>0%</strong>
                <span>Complete</span>
              </div>

              <div className="progress-track">
                <div className="progress-fill" />
              </div>

              <p>
                Complete your assessment to unlock your
                personalized roadmap.
              </p>

            </div>

          </section>

          {/* Quick Stats */}
          <section className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon green-icon">
                <CheckCircle2 size={19} />
              </div>

              <div>
                <span>Completed</span>
                <strong>0</strong>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon yellow-icon">
                <BookOpen size={19} />
              </div>

              <div>
                <span>Learning</span>
                <strong>0</strong>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon soft-green-icon">
                <Map size={19} />
              </div>

              <div>
                <span>Roadmap Steps</span>
                <strong>0</strong>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon soft-yellow-icon">
                <Sparkles size={19} />
              </div>

              <div>
                <span>XP Earned</span>
                <strong>0</strong>
              </div>

            </div>

          </section>

          {/* Lower Section */}
          <section className="dashboard-lower-grid">

            {/* Roadmap */}
            <div className="dashboard-card roadmap-preview">

              <div className="dashboard-card-header">

                <div>
                  <span className="small-label">
                    Your journey
                  </span>

                  <h2>My Roadmap</h2>
                </div>

                <button
                  onClick={() => navigate("/roadmap")}
                >
                  View all
                  <ChevronRight size={16} />
                </button>

              </div>

              <div className="empty-state">

                <div className="empty-icon">
                  <Map size={23} />
                </div>

                <h3>Your roadmap is waiting</h3>

                <p>
                  Complete your assessment to get a
                  personalized learning roadmap.
                </p>

                <button
                  onClick={() => navigate("/assessment")}
                >
                  Discover My Path
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>

            {/* Learning */}
            <div className="dashboard-card learning-preview">

              <div className="dashboard-card-header">

                <div>
                  <span className="small-label">
                    Keep learning
                  </span>

                  <h2>Learn & Prep</h2>
                </div>

                <button
                  onClick={() => navigate("/learn")}
                >
                  Explore
                  <ChevronRight size={16} />
                </button>

              </div>

              <div className="learning-item">

                <div className="learning-item-icon">
                  <BookOpen size={19} />
                </div>

                <div className="learning-item-content">
                  <strong>Glimpse into Majors</strong>

                  <p>
                    Explore mini courses and discover
                    what your future major looks like.
                  </p>

                  <div className="learning-progress">
                    <div className="learning-progress-bar" />
                  </div>
                </div>

                <span className="learning-percent">
                  0%
                </span>

              </div>

              <div className="learning-item">

                <div className="learning-item-icon yellow-learning">
                  <Sparkles size={19} />
                </div>

                <div className="learning-item-content">
                  <strong>Daily Quiz</strong>

                  <p>
                    Test your knowledge and build your
                    daily learning streak.
                  </p>

                  <div className="learning-progress">
                    <div className="learning-progress-bar" />
                  </div>
                </div>

                <span className="learning-percent">
                  0%
                </span>

              </div>

            </div>

          </section>

          {/* AI Mentor Banner */}
          <section className="mentor-banner">

            <div className="mentor-banner-icon">
              <MessageCircle size={25} />
            </div>

            <div className="mentor-banner-content">

              <span>
                Need a little help?
              </span>

              <h2>
                Talk to your AI Mentor.
              </h2>

              <p>
                Ask questions about majors, careers,
                skills, or your learning journey.
              </p>

            </div>

            <button
              onClick={() => navigate("/mentor")}
            >
              Chat with Mentor
              <ArrowRight size={17} />
            </button>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;