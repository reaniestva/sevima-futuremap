const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const assessmentRouter = require("./routes/assesment");
const questionRouter = require("./routes/question");
const optionRouter = require("./routes/");

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