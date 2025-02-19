import express, { json } from "express";
import { db } from "../database/database.js";
import cors from "cors"
import dotenv from "dotenv";


dotenv.config();

console.log(process.env.MONGO_URI);


const app = express();
const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
