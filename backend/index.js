import express from "express";
import cors from "cors";
import postRoutes from "./routes/postsRoute.js";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/usersRoute.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());

app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
