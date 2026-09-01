const Room=require('../models/room_schema.js')
module.exports.showRoom=async(req,res)=>{
  let{id}=req.params;
  let Rooms=await Room.findById(id)
  res.json(Rooms)
}

module.exports.UpdateForm=async(req,res)=>{
  let {id}=req.params;
    let room=await Room.findById(id)
    res.json(room)
}
module.exports.UpdateRoom=async(req,res)=>{
  let {id}=req.params;
   let room=await Room.findByIdAndUpdate(id,
         req.body,
        { new: true }
);
  res.json(room)

}
module.exports.NewRoom=async(req,res)=>{
  let newRoom=new Room(req.body)
  await newRoom.save();
  res.json(newRoom)
}

module.exports.AllRoom=async(req,res)=>{
let allrooms=await Room.find({})
res.json(allrooms)
}

module.exports.DeleteRoom=async(req,res)=>{
  let {id}=req.params
  await Room.findByIdAndDelete(id)
  res.json({ message: "Room deleted successfully" });
}



