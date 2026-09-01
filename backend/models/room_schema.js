const mongoose=require('mongoose')

const roomSchema=new mongoose.Schema({
       title:{
        type:String,
        required:true
       },
       rent:{
        type:Number,
        required:true
       },
       location:{
        type:String,
        required:true
       },
       ownerDetails:{
           name:{
             type:String, 
             required: true,
           },
           //  Schema.Types.ObjectId
          //  ref:"User",
           email:String,
           contact:{
            type:Number,
            require:true
           }
       },
       facilities:{
        type:[String],
        required:true
       },
       conditions:{
        type:[String]
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
    category:{
     type:String,
     enum:['1Bhk','2Bhk','Cot Basis/PG','1RK','Single Room'],
     required:true
     },
       available:{
        type:String,
        enum:['Availabel','Not Availabel'],
        required:true
       },
         reviews:[
    {
      type:Number,
      required:true
    }
  ],
  // Schema.Types.ObjectId,
  //     ref:"Review"
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
gender:{
  type:String,
     enum:['Girls','Boys'],
     required:true
}

})

const Room=mongoose.model('Room',roomSchema);
module.exports = Room;