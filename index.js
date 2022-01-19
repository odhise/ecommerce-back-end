const express=require("express");

const mongoose=require("mongoose");

const dotenv=require("dotenv");

const userRoutes=require("./routes/user");

const productRoutes=require("./routes/product");

const userAuth=require('./routes/auth');
const userCart=require('./routes/cart');
const userOrder=require("./routes/order")


const app=express()

const PORT=5000||process.env.PORT

dotenv.config()


mongoose.connect(process.env.MONGO_URL)



.then(()=>{
    console.log("DB connected")
})

.catch((err)=>{
    console.log(err)
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)

})

app.use(express.json())

app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes);
app.use("/api/auth",userAuth);
app.use("/api/cart",userCart);
app.use("/api/order",userOrder)



    
