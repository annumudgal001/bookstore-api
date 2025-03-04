const express = require('express');
const router=express.Router();
const {
    getallbooks,
    addnewbook,
    updatesinglebook,
    deletebook,
    getsinglebookbyid
}=require('../controllers/book-controller.js')


router.get("/get",getallbooks)
router.get("/get/:id",getsinglebookbyid)
router.post("/add",addnewbook)
router.put("/update/:id",updatesinglebook)
router.delete("/delete/:id",deletebook)

module.exports=router;