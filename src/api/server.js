import express, { json } from "express";
import { db } from "../database/database.js";
import cors from "cors"

const app = express();

app.use(cors())
app.get("/", (request, response) => {
  return response.json({
    Message: "Endpoint not found. Please check the URL. 404 Error"
  });
});

app.get("/artists",async (request, response) => {
  return response.json(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (request, response) => {
  return response.json(await db.collection("songs").find({}).toArray());
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
