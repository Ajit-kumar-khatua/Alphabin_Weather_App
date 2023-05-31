const express=require("express")
const fetch=require("node-fetch")
const { LocationModel } = require("../models/location.model")

const apiRouter=express.Router()

apiRouter.get("/weather",async (req,res)=>{
    let { location }= req.query
    //   location=location.replace(/"/g,'')
    try {
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8557fec9344d0e4e9d4e7884f5474560`)
        let data= await response.json()
        res.status(200).send(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Error while getting weather Data")
    }

})

apiRouter.post("/preference",async(req,res)=>{
    let {userID,location}=req.body
    try {
        let userPreferences= await LocationModel.find({userID})

        for(let userPreference of userPreferences){
            if(userPreference.location==="location"){
                res.send({"msg":"Location already Saved"})
               return
            }
        }
        
        await LocationModel.insertMany({userID,location})
        res.status(200).send({"msg":"Location Saved sucessfully"})
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Error while saving user location preference")
    }
})



module.exports={
    apiRouter
}