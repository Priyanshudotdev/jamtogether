import type { Request, Response } from "express";
import { getMusicDetailById, searchYoutubeMusic } from "../services/music.services";

const getMusicDetail = async (req: Request, res: Response) => {
  try {
    const videoId = req.params.videoId;

    const data = await getMusicDetailById(videoId);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch video details",
    });
  }
};

const searchSong = async (req: Request, res: Response) => {
  try {
    const query = req.query.q;

    if (!query) {
      res.status(400).json({ message: "Missing search query" });
      return;
    }
    const data = await searchYoutubeMusic(String(query));

    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "Error" });
  }
};

export { getMusicDetail, searchSong };
