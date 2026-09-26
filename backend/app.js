const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const assessmentRouter = require("./routes/assessment");
const questionRouter = require("./routes/question");
const optionRouter = require("./routes/option");
const majorRouter = require("./routes/major");
const majorRecomRouter = require("./routes/majorrecomendation");
const learningModuleRouter = require("./routes/learningmodule");
const roadmapRouter = require("./routes/roadmap");
const learningProgressRouter = require("./routes/learningprogress");
const assessmentResultRouter = require("./routes/asessmentresult");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/assessments", assessmentRouter);
app.use("/questions", questionRouter);
app.use("/options", optionRouter);
app.use("/majors", majorRouter);
app.use("/majorrecomendatios", majorRecomRouter);
app.use("/majorrecomendatios", majorRecomRouter);
app.use("/learningmodule", learningModuleRouter);
app.use("/roadmap", roadmapRouter);
app.use("/learningprogress", learningProgressRouter);
app.use("/assessment-result", assessmentResultRouter);

app.get("/", (req, res) => {
  res.json({
    message: "FutureMap is running",
    port: PORT,
  });
});

app.listen(PORT, () => {
  console.log("FutureMap is running");
  console.log(`Server: http://localhost:${PORT}`);
});