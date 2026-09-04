const router = require("express").Router();
const Messcontroller=require('../controllers/messController')
const wrapAsync=require('../util/wrapAsync')
const {ValidateMess}=require('../middleware/app')
router.get('/',wrapAsync(Messcontroller.Allmess))
router.post('/',ValidateMess,wrapAsync(Messcontroller.Addmess))
router.get('/:id',wrapAsync(Messcontroller.Showmess))
router.put('/:id',ValidateMess,wrapAsync(Messcontroller.Updatemess))
router.get('/:id/edit',wrapAsync(Messcontroller.Updatemessform))
router.delete('/:id',wrapAsync(Messcontroller.Deletemess))
module.exports=router;