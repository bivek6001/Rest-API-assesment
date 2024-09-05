const express=require("express");
const router= express.Router();
const{ registerUser, findIntern,deleteIntern,updateIntern, loginUser} = require("../controllers/user-controller.js")
router.post("/signup",registerUser)
router.post("/signin",loginUser)
router.get("/find/:id",findIntern)
router.delete("/delete/:id",deleteIntern);
router.put("/update/:id",updateIntern)
module.exports =router;