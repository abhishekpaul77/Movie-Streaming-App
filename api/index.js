const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const movieRoute=require("./routes/movies")
const listRoute=require("./routes/lists")
const cors=require("cors")

const app=express();
app.use(express.json())
app.use(cors())

dotenv.config()

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log("Error in DB",err)
})



app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/movies",movieRoute)
app.use("/api/lists",listRoute)


app.listen(8080,()=>{
    console.log("Backend server started");
})