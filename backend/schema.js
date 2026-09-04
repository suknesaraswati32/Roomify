const Joi=require('joi')

const Roomschema = Joi.object({
  title: Joi.string().min(3).required(),

  rent: Joi.number().required(),
  location: Joi.string().required(),
  //  ownerDetails:Joi.object({
  //      name:{
  //        type:String,
  //        required: true,
  //      })
  //      //  Schema.Types.ObjectId
  //     //  ref:"User",
  //      email:String,
  //      contact:{
  //       type:Number,
  //       require:true
  //      }
  //  },
  facilities: [Joi.string().required()],
  conditions: [Joi.string().required()],
  images: [
    {
      url: Joi.string().required(),
      filename: Joi.string().required(),
    },
  ],
  category: Joi.string()
    .valid("1Bhk", "2Bhk", "Cot Basis/PG", "1RK", "Single Room")
    .required(),
  available: Joi.string().valid("Available", "Not Available").required(),
  reviews: [Joi.number().required()],
  // Schema.Types.ObjectId,
  //     ref:"Review"
  geometry: Joi.string().valid("Point").required(),
  coordinates: [Joi.number().required()],
  gender: Joi.string().valid("Girls", "Boys").required(),
});


const messSchema = Joi.object({

  title: Joi.string().min(3).required(),
      category:Joi.string().valid('VEG Mess','Non-Veg Mess').required(),
      Location:Joi.string().required(),
      Price:Joi.number().required(),
      //     ownerDetails:{
      //      name:{
      //        type:String,
      //        ref:"User",
      //        required: true,
      //      },
      //      email:String,
      //      contact:{
      //       type:Number,
      //       require:true
      //      }
      //  },
           images:[
        {
          url: Joi.string().required(),
          filename: Joi.string().required(),
        },
       ],
    reviews:[   Joi.number().required()],
   geometry: Joi.string().valid("Point").required(),
  coordinates: [Joi.number().required()],
WeeklyMenu:[{
    day:Joi.string().required(),
    items:[Joi.string().required()]
  }],

Availabel:Joi.string().valid("Available", "Not Available").required(),

})