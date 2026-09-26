import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Palette,
  Code2,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import "./RecommendedMajor.css";

const dummyRecommendations = [
  {
    id: 1,
    name: "UI/UX Design",
    category: "Design",
    score: 92,
    description:
      "Explore user needs and turn ideas into intuitive, useful, and engaging digital experiences.",
    icon: Palette,
  },
  {
    id: 2,
    name: "Computer Science",
    category: "Technology",
    score: 84,
    description:
      "Learn how technology works, build software, and solve real-world problems through programming.",
    icon: Code2,
  },
  {
    id: 3,
    name: "Business Management",
    category: "Business",
    score: 78,
    description:
      "Understand how businesses operate, make strategic decisions, and create value for customers.",
    icon: BriefcaseBusiness,
  },
];

function RecommendedMajor() {
  const navigate = useNavigate();

  return (
    <div className="major-page">
      <header className="major-header">
        <button
          className="major-logo"
          onClick={() => navigate("/dashboard")}
        >
          Future<span>Map</span>
        </button>

        <div className="major-header-label">
          Recommended Majors
        </div>
      </header>

      <main className="major-main">
        <div className="major-container">

          <section className="major-hero">
            <div className="major-success-icon">
              <CheckCircle2 size={24} />
            </div>

            <div className="major-badge">
              <Sparkles size={14} />
              Assessment completed
            </div>

            <h1>
              Your potential
              <br />
              <span>directions.</span>
            </h1>

            <p>
              Based on your assessment, we've found several
              majors that could match your interests and strengths.
            </p>
          </section>

          {/* Dummy assessment result */}
          <section className="major-profile-card">
            <div className="major-profile-icon">
              <Compass size={23} />
            </div>

            <div>
              <span>Your assessment profile</span>

              <h2>Explorative</h2>

              <p>
                You enjoy discovering possibilities, learning
                independently, and exploring different areas.
              </p>
            </div>
          </section>

          <div className="major-section-heading">
            <div>
              <span>Based on your result</span>
              <h2>Recommended majors</h2>
            </div>

            <div className="major-count">
              3 majors
            </div>
          </div>

          {/* Dummy major recommendations */}
          <section className="major-list">
            {dummyRecommendations.map((major, index) => {
              const Icon = major.icon;

              return (
                <article
                  className={`major-card ${
                    index === 0 ? "major-card-featured" : ""
                  }`}
                  key={major.id}
                >
                  <div className="major-card-top">
                    <div className="major-icon">
                      <Icon size={22} />
                    </div>

                    <div className="major-match">
                      <span>Match</span>
                      <strong>{major.score}%</strong>
                    </div>
                  </div>

                  <div className="major-card-content">
                    <span className="major-category">
                      {major.category}
                    </span>

                    <h3>{major.name}</h3>

                    <p>{major.description}</p>
                  </div>

                  <button
                    className="major-explore-button"
                    onClick={() =>
                      navigate("/roadmap", {
                        state: {
                          major: major.name,
                        },
                      })
                    }
                  >
                    Explore Roadmap
                    <ArrowRight size={17} />
                  </button>
                </article>
              );
            })}
          </section>

          <section className="major-bottom-card">
            <div>
              <span>Remember</span>

              <h2>
                Your major doesn't define your entire future.
              </h2>

              <p>
                Use these recommendations as a starting point
                to explore different possibilities.
              </p>
            </div>

            <button onClick={() => navigate("/dashboard")}>
              Back to Dashboard
              <ArrowRight size={17} />
            </button>
          </section>

        </div>
      </main>
    </div>
  );
}

export default RecommendedMajor;