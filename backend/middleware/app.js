const Roomvalidation=require('../schema.js')
const validateRoom=(req,res,next)=>{
  let {error}=Roomvalidation.validate(req.body);
  if(error){
    let errMsg=error.details.map((el)=>el.message).join(',')
    throw new ExpressError(400,errMsg)
  }
  else{
    next()
  }
}

const ValidateMess=(req,res,next)=>{
let {error}=Messvalidation.validate(req.body);
if(error){
  let errMsg=error.details.map((el)=>el.message).join(',')
  throw new ExpressError(400,errMsg)
}
else{
  next()
}
}

module.exports={validateRoom,ValidateMess};