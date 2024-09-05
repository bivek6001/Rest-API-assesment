const express=require("express");
const router= express.Router();
const {createFeedback, deleteFeedback,updateFeedback,readFeedback}=require("../controllers/feedback-controller.js");
const isManager= require("../middlewares/isManager.js")
router.post("/create/:id",isManager,createFeedback)
router.get("/read/:id",readFeedback)
router.put("/update/:id",isManager,updateFeedback)
router.delete("/delete/:id",isManager,deleteFeedback)


module.exports =router;