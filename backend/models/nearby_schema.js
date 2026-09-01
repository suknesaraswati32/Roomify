const mongoose=require('mongoose')
const NearbySchema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   location:{
    type:String,
    required:true
   },
   latitude: {
  type: Number,
  required: true
},

longitude: {
  type: Number,
  required: true
}
})
const Nearby=mongoose.model('Nearby',NearbySchema)

module.exports=Nearby;