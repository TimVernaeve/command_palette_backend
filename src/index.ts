import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Result from './routes/Result';

dotenv.config();
mongoose.connect(process.env.MONGO_DB!)

const db = mongoose.connection;
const port = process.env.PORT || 8080;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected");
});

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => res.send('use /api'))

app.use("/api", Result);