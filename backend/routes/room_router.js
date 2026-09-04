const router = require("express").Router();
const wrapAsync=require('../util/wrapAsync')
const{validateRoom}=require('../middleware/app')
const RoomControllers=require('../controllers/roomControllers')
router.get('/:id',wrapAsync(RoomControllers.showRoom))
router.get('/:id/edit',wrapAsync(RoomControllers.UpdateForm))
router.put('/:id',validateRoom,wrapAsync(RoomControllers.UpdateRoom))
router.post("/",validateRoom,wrapAsync(RoomControllers.NewRoom))
router.get('/',wrapAsync(RoomControllers.AllRoom))
router.delete('/:id',wrapAsync(RoomControllers.DeleteRoom))
module.exports=router;