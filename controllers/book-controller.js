const book = require('../models/book.js')


const getallbooks=async(req,res)=>{
    const allbooks=await book.find()
    try {
        if(allbooks){
            res.status(200).json({
                success:true,
                message:"All books fetched successfully",
                data:allbooks
            })
        }else{
            res.status(404).json({
                success:false,
                message:"No books found"
            })
        }       
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }

}

const getsinglebookbyid=async(req,res)=>{
    
    const singlebook=await book.findById(req.params.id)

    try {
        if(bookdetailbyid){
            res.status(200).json({
                success:true,
                message:"Book fetched successfully",
                data:bookdetailbyid
            })
        } else{
            res.status(404).json({
                success:false,
                message:"No book found with that ID"
            })
        }       
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
 
}

const addnewbook=async(req,res)=>{
    try {
        const newbookformdata=req.body
        const newlycreatedbook = await book.create(newbookformdata);
        if(newlycreatedbook){
            res.status(201).json({
                message:"New book added successfully",
                data:newlycreatedbook
            })
        }else{
            res.status(400).json({
                message:" error occured",
            })
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}

const updatesinglebook=async(req,res)=>{
    try {
        const updatedbook=await book.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(updatedbook){
            res.status(200).json({
                message:"Book updated successfully",
                data:updatedbook
            })
        } else{
            res.status(404).json({
                message:"No book found with that ID"
            })
        }
        
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}
const deletebook = async(req,res)=>{
    try {
        const deletedbook=await book.findByIdAndDelete(req.params.id)
        if(deletedbook){
            res.status(200).json({
                message:"Book deleted successfully",
                data:deletedbook
            })
        } else{
            res.status(404).json({
                message:"No book found with that ID"
            })
        }
        
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
 }
    


module.exports={
    getallbooks,
    addnewbook,
    updatesinglebook,
    deletebook,
    getsinglebookbyid
}