const Mess=require('../models/mess_schema')

module.exports.Allmess=async(req,res)=>{
  let allmess= await Mess.find({})
  res.json(allmess)
}

module.exports.Addmess=async(req,res)=>{
  let newmess=new Mess(req.body);
  newmess.save()
  res.json(newmess)
}
module.exports.Updatemessform=async(req,res)=>{
  let {id}=req.params;
  let edit_form=await Mess.findById(id)
  res.json(edit_form)
}

module.exports.Updatemess=async(req,res)=>{
  let {id}=req.params;
  let updatedmess= await Mess.findByIdAndUpdate(id,
    req.body,
    { new: true }
  )
  res.json(updatedmess)
}

module.exports.Showmess=async(req,res)=>{
  let {id}=req.params;
  let mess=await Mess.findById(id);
  res.json(mess)
}

module.exports.Deletemess=async(req,res)=>{
  let {id}=req.params;
  await Mess.findByIdAndDelete(id);
  res.json({ message: "Mess deleted successfully" });
}