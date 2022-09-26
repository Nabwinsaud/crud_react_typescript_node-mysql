import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.get('')

app.use("/", userRoute);
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
