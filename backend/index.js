import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { upload, handleFileUpload } from "./middleware/multer.js";

import postRoutes from "./routes/postsRoute.js";
import authRoutes from "./routes/authRoute.js";
import filesUploadRoute from "./routes/filesUploadRoute.js";

const app = express();
app.use(express.json());

app.use(cors());
app.use(cookieParser());
app.use("/api/files", handleFileUpload);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.post("/api/files/upload", (req, res) => {
  console.log("File from route handler:", req.file);
  res.status(200).send("File uploaded successfully!");
});

app.listen(8800, () => {
  console.log("Connected!");
});
