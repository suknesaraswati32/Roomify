require("dotenv").config({ path: "../.env" });
const mongoose=require('mongoose')
const {rooms,messData} = require('./data.js')
const room=require('../models/room_schema')
const Mess=require('../models/mess_schema')
const uri=process.env.MONGO_URL;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
const initDB=async()=>{
   await room.deleteMany({});
   const roomsData=rooms.map((obj)=>({
    ...obj
   }))
   await room.insertMany(roomsData);
   console.log('data was initalize')
}

// initDB();

const initmessData=async()=>{
  await Mess.deleteMany({});
  const messDataList=messData.map((mess)=>({
   ...mess
  }))
   await Mess.insertMany(messDataList);
   console.log('data was initalize')
}

initmessData()