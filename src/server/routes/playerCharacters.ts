import express from "express";

import { db } from "../index";
import { createPlayerCharacter } from "../db/playerCharacters";

const router = express.Router();

router
  .route("/")
  .get((_, res) => {
    res.send("Hello World!");
  })
  .post((_, res) => {
    createPlayerCharacter(db);
    res.send("Created character!");
  });

export default router;
