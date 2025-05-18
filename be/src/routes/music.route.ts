import { Router } from "express";
import { getMusicDetail, searchSong } from "../controllers/music.controller";

const router = Router();

router.get("/search", searchSong);
router.route("/:videoId").get(getMusicDetail);

export default router;
