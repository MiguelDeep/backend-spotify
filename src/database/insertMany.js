import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";
import { db } from "./database.js";

const newArtistArray = artistArray.map((currentArtistObj)=>{
    const newArtistObj = {...currentArtistObj}
    delete newArtistObj.id
    return newArtistObj
})

const newSongArray = songsArray.map((currentSongObj)=>{
  const newSongObj = {...currentSongObj}
  delete newSongObj.id
  return newSongObj

})

const responseSongs = await db.collection("songs").insertMany(newSongArray); 
const responseArtist=await db.collection("artists").insertMany(newArtistArray); 


console.log(responseSongs)
console.log(responseArtist)

