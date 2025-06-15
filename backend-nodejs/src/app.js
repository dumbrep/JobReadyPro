const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const dotenv = require("dotenv")
const cors = require("cors")

const App = express()

dotenv.config()


const PORT = process.env.PORT
App.use(express.json())
App.use(express.urlencoded({extended : false}))
App.use(cors())
App.use(authRouter)


const connect = mongoose.connect(process.env.mongodb_url)

connect.then(()=>{
    console.log("Connected to database successfully")
}).catch(()=>{
    console.log("Connection to database failed")
})


App.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

