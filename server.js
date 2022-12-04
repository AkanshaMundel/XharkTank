const mongoose=require('mongoose')
const app=require('./index')
const dotenv=require('dotenv')
dotenv.config()

const port =process.env.PORT || 8000
const db=process.env.MONGO_URI

mongoose.connect(db).then(()=>{
    console.log("databasae connected ")
}).catch((err)=>console.log(err.message))

app.listen(port,()=>{
    console.log("server stdarted")
})