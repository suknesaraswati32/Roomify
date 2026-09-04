const mongoose=require('mongoose')

const MessSchema= new mongoose.Schema({
       title:{
        type:String,
        required:true
       },
      category:{
        type:String,
        enum:['VEG Mess','Non-Veg Mess'],
        required:true,
      },
      Location:{
        type:String,
        required:true,
      },
      Price:{
        type:Number,
        required:true
      },
          ownerDetails:{
           name:{
             type:String,
             ref:"User",
             required: true,
           },
           email:String,
           contact:{
            type:Number,
            require:true
           }
       },
           images:{
        type:[
        {
          url:String,
          filename:String,
        },
       ],
        required:true
      },
          reviews:[
    {
      type:Number,
      required:true
    }
  ],
   geometry: {
  type: {
    type: String,
    enum: ["Point"],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
},
WeeklyMenu:{
  type:[{
    day:String,
    items:[String]
  }]
},
Availabel:{
  type:String,
  enum:['Available','Not Available'],
  required:true
}
})

const Mess=mongoose.model('Mess',MessSchema);
module.exports=Mess;