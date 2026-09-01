require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const rooms=require('./models/room_schema.js')
const mess=require('./models/mess_schema.js')
const ExpressError=require('./util/ExpressError.js')
const roomRouter=require('./routes/room_router')
const messRouter=require('./routes/mess_router.js')
const PORT=process.env.PORT || 8080
const uri=process.env.MONGO_URL;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
const bodyParser=require('body-parser')
const cors=require('cors')
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
// app.use("/", authRoute);
app.use('/rooms',roomRouter)
app.use('/mess',messRouter)
app.use((err,req,res,next)=>{
  let {statusCode=500,message="something went wrong"}=err;
res.status(statusCode).send(message)
})
app.listen(PORT,()=>{
  console.log('app is running on port 8080')
})