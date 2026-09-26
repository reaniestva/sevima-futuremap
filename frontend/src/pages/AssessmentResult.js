import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Sparkles,
  Target,
  Palette,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";
import "./AssessmentResult.css";

const dummyResult = {
  result: "Explorative",
  score: 82,
  description:
    "You enjoy discovering new things, exploring different possibilities, and learning about areas that interest you.",
};

const dummyMajors = [
  {
    name: "UI/UX Design",
    category: "Design",
    score: 92,
    icon: Palette,
  },
  {
    name: "Computer Science",
    category: "Technology",
    score: 84,
    icon: Code2,
  },
  {
    name: "Business Management",
    category: "Business",
    score: 78,
    icon: BriefcaseBusiness,
  },
];

function AssessmentResult() {
  const navigate = useNavigate();

  return (
    <div className="result-page">

      <header className="result-header">
        <button
          className="result-logo"
          onClick={() => navigate("/dashboard")}
        >
          Future<span>Map</span>
        </button>

        <div className="result-header-label">
          Assessment Complete
        </div>
      </header>

      <main className="result-main">
        <div className="result-container">

          {/* Header */}
          <section className="result-hero">

            <div className="result-success-icon">
              <CheckCircle2 size={25} />
            </div>

            <div className="result-badge">
              <Sparkles size={14} />
              Your results are ready
            </div>

            <h1>
              Here's what
              <br />
              fits <span>you.</span>
            </h1>

            <p>
              You've completed your assessment.
              Here's what we found based on your answers.
            </p>

          </section>

          {/* Result */}
          <section className="result-profile-card">

            <div className="profile-card-header">

              <div>
                <span className="result-label">
                  Your assessment result
                </span>

                <h2>
                  {dummyResult.result}
                </h2>
              </div>

              <div className="profile-icon">
                <Compass size={22} />
              </div>

            </div>

            <p className="profile-description">
              {dummyResult.description}
            </p>

          </section>

          {/* Score */}
          <section className="result-score-card">

            <div className="score-heading">

              <div>
                <span className="result-label">
                  Assessment Score
                </span>

                <h2>
                  Your overall score
                </h2>
              </div>

              <div className="score-icon">
                <Target size={21} />
              </div>

            </div>

            <div className="score-value">
              {dummyResult.score}
            </div>

            <div className="score-track">
              <div
                className="score-fill"
                style={{
                  width: `${dummyResult.score}%`,
                }}
              />
            </div>

            <p className="score-description">
              Your score is based on the answers you
              provided during the assessment.
            </p>

          </section>

          {/* Recommended Major Preview */}
          <section className="result-major-section">

            <div className="result-major-heading">
              <div>
                <span className="result-label">
                  Based on your profile
                </span>

                <h2>
                  Recommended majors
                </h2>
              </div>

              <button
                onClick={() =>
                  navigate("/recommended-major")
                }
              >
                View all
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="result-major-list">

              {dummyMajors.map((major) => {
                const Icon = major.icon;

                return (
                  <div
                    className="result-major-card"
                    key={major.name}
                  >
                    <div className="result-major-icon">
                      <Icon size={19} />
                    </div>

                    <div className="result-major-info">
                      <span>
                        {major.category}
                      </span>

                      <h3>
                        {major.name}
                      </h3>
                    </div>

                    <strong>
                      {major.score}%
                    </strong>
                  </div>
                );
              })}

            </div>

          </section>

          {/* Next */}
          <section className="result-next-card">

            <div className="next-card-icon">
              <Compass size={23} />
            </div>

            <div className="next-card-content">

              <span>
                What's next?
              </span>

              <h2>
                Discover your recommended majors.
              </h2>

              <p>
                Explore majors that match your interests
                and see which ones could fit your future path.
              </p>

            </div>

            <button
              onClick={() =>
                navigate("/recommended-major")
              }
            >
              Explore Majors
              <ArrowRight size={17} />
            </button>

          </section>

        </div>
      </main>
    </div>
  );
}

export default AssessmentResult;