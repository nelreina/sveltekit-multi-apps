import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import compression from "compression";
import RealTime from "./realtime.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  PORT = 3000,
  ASSETS = path.join(__dirname, "assets"),
  PRERENDERED = path.join(__dirname, "prerendered"),
} = process.env;

const app = express();
app.use(compression());
app.use("/web-app2", express.static(ASSETS));
app.use("/web-app2", express.static(PRERENDERED));
// Your own routes here

const server = app.listen(PORT);
console.log();
const realtime = RealTime(server);
realtime.start(true);
console.log();

const shutdown = async () => {
  try {
    console.info("App shutdown started...");
    process.exit(0);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
