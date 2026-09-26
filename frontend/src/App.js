import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import AssessmentResult from "./pages/AssessmentResult";
import RecommendedMajor from "./pages/RecommendedMajor";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/assessment"
          element={<Assessment />}
        />

        <Route
          path="/assessment-result"
          element={<AssessmentResult />}
        />

        <Route
          path="/recommended-major"
          element={<RecommendedMajor />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;