
const router=require("express").Router();

const Order=require("../models/order")

router.post("/addOrder",async (req,res)=>{

    const newOrder=new Order({
        productname:req.body.productname,
        quantity:req.body.quantity,
        size:req.body.size,
        color:req.body.color,
        image:req.body.image,
        price:req.body.price,
    })


    try{
        const savedOrder=await newOrder.save()
        res.status(201).json(savedOrder)
        

    }
    catch(err){
        res.status(404).json(err)

    }

})

module.exports=router