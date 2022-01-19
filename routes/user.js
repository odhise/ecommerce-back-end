
const router=require("express").Router();

const { findById } = require("../models/user");
const User=require("../models/user");

const{verifyTokenAndAuthorization,verifyTokenAndAdmin}=require("./verifyToken")






router.put("/:id",verifyTokenAndAuthorization, async (req,res)=>{
    try{
        const id=req.params.id
        const updates=req.body
        const options={new:true}
    
        const updatedUser=await User.findByIdAndUpdate(id,updates,options)
    
        
    
    }
    
    catch(err){
        res.status(500).json(err)
    }
})

//Delete User

router.delete("/:id", verifyTokenAndAdmin,async (req,res)=>{
    try{
        return await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user successfully deleted")
        
        }
        catch(err){
            res.status(404).json("user not found")
        
        }


})

//find by id

router.get("/find/:id",verifyTokenAndAuthorization,async (req,res)=>{

    try{
        const user=await User.findById(req.params.id)
        const{password,...others}=user._doc
        res.status(200).json(others)

    }
    catch(err){
res.status(404).json(err)
    }
})

// all users
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try{
        const user=await User.find()
        res.status(200).json(user)

    }
    catch(err){
        res.status(404).json(err)

    }
})





module.exports=router


