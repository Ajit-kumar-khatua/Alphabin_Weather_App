const express=require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.route")
require("dotenv").config()


const app=express()
app.use(express.json())

app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Home Route")
})


app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connected to DB")
        
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running on ${process.env.port}`)
})