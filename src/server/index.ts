import express from "express";

import charactersRouter from "./routes/playerCharacters";
import { createDatabase } from "./db";

const app = express();

export const db = createDatabase();

// server config
const port = 3000;
const API_VERSION = "v1";
const API_PATH = `/api/${API_VERSION}`;

// set up routes
app.use(`${API_PATH}/characters`, charactersRouter);

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
