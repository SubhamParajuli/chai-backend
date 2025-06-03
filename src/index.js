//require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})

connectDB();





/*
import express from "express"
const app= express()

(async ()=>{
  try{
   await mongoose.connect(`${process.env.MOGODB_URI}/ ${DB_NAME}`)

   app.on("error",(error)=>{
    console.log("Error: ", error);
    throw error
   })

   app.listen(process.env.PORT, ()=>{
    console.log(`App is listening at port ${process.env.PORT}`);
   })
}
catch(error){
  console.log("EROOR: ",error);
  throw err
}})()

*/