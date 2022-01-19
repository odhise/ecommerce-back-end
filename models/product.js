const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    productname:{type:String,required:true},
    description:{type:String,required:true},
    size:{type:Array,required:true},
    image:{type:String,required:true},
    colors:{type:Array,required:true},
    price:{type:Number,required:true}
    
    
    },{timestamps:true})
    
    module.exports=mongoose.model("Product",productSchema)