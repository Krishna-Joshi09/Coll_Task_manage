const express = require("express");
const router= express.Router()
const userController= require("../controller/userController");

const validate = require("../middleware/zodMiddleware");
const userValidation = require("../utils/userValidation");
router.post('/user',validate(userValidation),userController.adduser);


router.post('/user',userController.adduser);
router.get('/user',userController.getAlluser);
router.get("/user/:id", userController.getuserById);
router.post("/user/:id",userController.updateuserById);
router.delete("/user/:id", userController.deleteuserById);

module.exports=router
