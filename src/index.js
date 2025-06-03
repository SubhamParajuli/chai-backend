//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
  path:'./env'
})
try{
connectDB()

.then(()=>{

  app.on("error",(error)=>{
    console.log("Error: ", error);
    throw error
   })
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port: ${process.env.PORT}`)
  })
})

.catch((error)=>{
  console.log("Mongo db connection failed!!",error)
})

}
catch(error){
  console.log("EROOR: ",error);
  throw err
}



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