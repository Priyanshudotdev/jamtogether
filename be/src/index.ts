import express from "express";
import env from "./lib/env";
import axios from "axios";
import { config } from "dotenv";
config({
  // path: "../.env",
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("REQ");
  res.send("Hii there");
});

app.get("/music/:videoId", async (req, res) => {
  const videoId = req.params.videoId;

  if (env.YOUTUBE_API_KEY) {
    console.log(env.YOUTUBE_API_KEY);
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${env.YOUTUBE_API_KEY}`;

  const response = await axios.get(url);

  if (!response) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
  const title = response.data.items[0].snippet.title;
  const thumnail = response.data.items[0].snippet.thumbnails.standard.url;

  if (title && thumnail) {
    res.status(200).json({
      title,
      thumnail,
    });
    return;
  }

  res.status(500).json({
    message: "Failed to fetch video details",
  });
});

app.listen(8080);
