import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import axios from "axios";
import "./Assessment.css";

const API_URL = "http://localhost:8000";

const questions = [
    {
        id: 1,
        question:
            "I enjoy solving problems and figuring out how things work.",
    },
    {
        id: 2,
        question:
            "I like creating new ideas, designs, or visual concepts.",
    },
    {
        id: 3,
        question:
            "I enjoy helping and working closely with other people.",
    },
    {
        id: 4,
        question:
            "I am interested in understanding how businesses and organizations work.",
    },
    {
        id: 5,
        question:
            "I prefer activities where I can explore and learn independently.",
    },
];

const options = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
];

function Assessment() {
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAnswer = (value) => {
        setAnswers((previousAnswers) => ({
            ...previousAnswers,
            [questions[currentQuestion].id]: value,
        }));

        setError("");
    };

    const handleNext = async () => {
        const questionId = questions[currentQuestion].id;

        if (!answers[questionId]) {
            setError("Please select an answer first.");
            return;
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((previous) => previous + 1);
            setError("");
            return;
        }

        await submitAssessment();
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((previous) => previous - 1);
            setError("");
        }
    };

    const submitAssessment = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await axios.post(
                `${API_URL}/assessment-result`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(
                "Assessment result saved:",
                response.data
            );

            navigate("/assessment-result");

        } catch (err) {
            console.error(
                "Submit assessment error:",
                err.response?.data || err
            );

            if (
                err.response?.status === 401 ||
                err.response?.status === 403
            ) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");

                navigate("/login");
                return;
            }

            setError(
                err.response?.data?.message ||
                "Failed to save your assessment result."
            );
        } finally {
            setLoading(false);
        }
    };

    const question = questions[currentQuestion];

    const selectedAnswer = answers[question.id];

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="assessment-page">

            <header className="assessment-header">

                <button
                    className="assessment-logo"
                    onClick={() => navigate("/dashboard")}
                >
                    Future<span>Map</span>
                </button>

                <div className="assessment-progress-text">
                    {currentQuestion + 1} / {questions.length}
                </div>

            </header>

            <main className="assessment-main">

                <div className="assessment-container">

                    <div className="assessment-progress">
                        <div
                            className="assessment-progress-fill"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                    <div className="assessment-question-number">
                        QUESTION {currentQuestion + 1}
                    </div>

                    <div className="assessment-question">

                        <h1>
                            {question.question}
                        </h1>

                        <p>
                            Choose the answer that best describes you.
                        </p>

                    </div>

                    <div className="assessment-options">

                        {options.map((option, index) => {
                            const value = index + 1;

                            const isSelected =
                                Number(selectedAnswer) === value;

                            return (
                                <button
                                    key={option}
                                    type="button"
                                    className={`assessment-option ${isSelected ? "selected" : ""
                                        }`}
                                    onClick={() => handleAnswer(value)}
                                    disabled={loading}
                                >
                                    <span className="option-number">
                                        {value}
                                    </span>

                                    <span className="option-text">
                                        {option}
                                    </span>

                                    {isSelected && (
                                        <CheckCircle2
                                            size={20}
                                            className="option-check"
                                        />
                                    )}
                                </button>
                            );
                        })}

                    </div>

                    {error && (
                        <div className="assessment-error">
                            {error}
                        </div>
                    )}

                    <div className="assessment-actions">

                        <button
                            type="button"
                            className="assessment-back-button"
                            onClick={handlePrevious}
                            disabled={
                                currentQuestion === 0 || loading
                            }
                        >
                            <ArrowLeft size={17} />
                            Back
                        </button>

                        <button
                            type="button"
                            className="assessment-next-button"
                            onClick={() => {
                                if (currentQuestion === questions.length - 1) {
                                    navigate("/assessment-result");
                                } else {
                                    handleNext();
                                }
                            }}
                            disabled={loading}
                        >
                            {loading
                                ? "Saving..."
                                : currentQuestion === questions.length - 1
                                    ? "Finish Assessment"
                                    : "Continue"}

                            {!loading && (
                                <ArrowRight size={17} />
                            )}
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Assessment;