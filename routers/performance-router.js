const express=require("express");
const router= express.Router();
const {createPerformance, deletePerformance,updatePerformance,readPerformance}=require("../controllers/performance-controller.js");
const isManager= require("../middlewares/isManager.js")
router.post("/create/:id",isManager,createPerformance)
router.get("/read/:id",isManager,readPerformance)
router.put("/update/:id",isManager,updatePerformance)
router.delete("/delete/:id",isManager,deletePerformance)


module.exports =router;