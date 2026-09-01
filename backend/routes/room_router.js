const router = require("express").Router();
const wrapAsync=require('../util/wrapAsync')
const RoomControllers=require('../controllers/roomControllers')
router.get('/:id',wrapAsync(RoomControllers.showRoom))
router.get('/:id/edit',wrapAsync(RoomControllers.UpdateForm))
router.put('/:id',wrapAsync(RoomControllers.UpdateRoom))
router.post("/",wrapAsync(RoomControllers.NewRoom))
router.get('/',wrapAsync(RoomControllers.AllRoom))
router.delete('/:id',wrapAsync(RoomControllers.DeleteRoom))
module.exports=router;