const express = require("express");
const router= express.Router()
const projectController = require("../controller/projectController");

const validate = require("../middleware/zodMiddleware");
const projectValidation = require("../utils/projectValidation");
router.post('/project',validate(projectValidation),projectController.addproject);

router.post('/project',projectController.addproject);
router.get('/project',projectController.getAllproject);
router.get("/project/:id", projectController.getprojectById);
router.post("/project/:id",projectController.updateprojectById);
router.delete("/project/:id", projectController.deleteprojectById);

module.exports=router;