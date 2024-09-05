const express=require("express");
const router= express.Router();
const {createTask, updateTask,deleteTask,findTask,assignmentofTask }=require("../controllers/task-controller.js");
const isManager= require("../middlewares/isManager.js")
router.post("/create",isManager,createTask);
router.get("/find/:id",isManager,findTask);
router.put("/update/:id",isManager,updateTask);
router.delete("/delete/:id",isManager,deleteTask);
router.get("/assign/:id",isManager,assignmentofTask );
module.exports=router;