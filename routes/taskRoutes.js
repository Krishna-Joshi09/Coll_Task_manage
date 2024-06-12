const express = require("express");
const router= express.Router()
const taskController = require("../controller/taskController");

const validate = require("../middleware/zodMiddleware");
const taskValidation = require("../utils/taskValidation");
router.post('/task',validate(taskValidation),taskController.addtask);


router.post('/task',taskController.addtask);
router.get('/task',taskController.getAlltask);
router.get("/task/:id", taskController.gettaskById);
router.post("/task/:id",taskController.updatetaskById);
router.delete("/task/:id", taskController.deletetaskById);

module.exports=router
