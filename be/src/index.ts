import { config } from "dotenv";
config();

import cors from "cors";
import express from "express";
import musicRouter from "./routes/music.route";
// 23,160
// 19,076
// 3609

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hii there");
});

app.use("/music", musicRouter);

app.listen(8080);
