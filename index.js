const express =require('express')
const pitchRoute =require('./routes/pitchRoute')
const app=express()
app.use(express.json())


app.use('/pitches',pitchRoute);

module.exports=app