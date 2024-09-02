import express from "express";

import { db } from "../index";

const router = express.Router();

router
  .route("/")
  .get((_, res) => {
    res.send("Hello World!");
  })
  .post((_, res) => {
    res.send("Created character!");
  });

export default router;
