
const router=require("express").Router();

const Cart=require("../models/cart")



router.post("/addCart",async (req,res)=>{

    const newCart=new Cart({
        productname:req.body.productname,
        quantity:req.body.quantity,
        size:req.body.size,
        color:req.body.color,
        image:req.body.image,
        price:req.body.price,
    })


    try{
        const savedCart=await newCart.save()
        res.status(201).json(savedCart)

    }
    catch(err){
        res.status(404).json(err)

    }

})

module.exports=router