import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { upload, handleFileUpload } from "./middleware/multer.js";

import postRoutes from "./routes/postsRoute.js";
import authRoutes from "./routes/authRoute.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/files", handleFileUpload);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.post("/api/files/upload", (req, res) => {
  console.log("File from route handler:", req.file);
  res.status(200).send("File uploaded successfully!");
});

app.get("/", (req, res) => {
  res.send("Welcome to the root URL!");
});

app.listen(8800, () => {
  console.log("Server started on port 8800!");
});
