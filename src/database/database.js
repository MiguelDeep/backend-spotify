
import { MongoClient } from "mongodb"; 


const URI =
"mongodb+srv://nangamanuel22:vgTD1jgaJB1nyyu5@cluster0.esact.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
/* const songsCollection = await db.collection("songs").find({}).toArray(); 
  console.log(songsCollection)
*/

