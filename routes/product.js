const router=require("express").Router();
const Product=require("../models/product");
const { verifyTokenAndAdmin } = require("./verifyToken");


router.post("/add",async (req,res)=>{

    const newProduct=new Product({
        productname:req.body.productname,
        description:req.body.description,
        size:req.body.size,
        colors:req.body.colors,
        image:req.body.image,
        price:req.body.price,
    })


    try{
        const savedProduct=await newProduct.save()
        res.status(201).json(savedProduct)

    }
    catch(err){
        res.status(404).json(err)

    }

})



router.put("/:id",verifyTokenAndAdmin, async (req,res)=>{
    try{
        const id=req.params.id
        const updates=req.body
        const options={new:true}
    
        const updatedProduct=await Product.findByIdAndUpdate(id,updates,options)
    
        res.status(200).json(updatedProduct)
    
    }
    
    catch(err){
        res.status(500).json(err)
    }
})




//Delete Product

router.delete("/:id", verifyTokenAndAdmin,async (req,res)=>{
    try{
        return await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("product successfully deleted")
        
        }
        catch(err){
            res.status(404).json("product not found")
        
        }


})



module.exports=router