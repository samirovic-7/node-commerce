const express = require("express")
const dotnet = require("dotenv")
dotnet.config({path:'config.env'})
const morgan = require("morgan")

 const mongoose = require("mongoose")
const globalError = require('./Middleware/ErrorMiddelware')
const ApiError = require('./utils/apiError')

const DBConnection = require('./config/database')
const categoryRoute = require('./api/CatigoryRouter')

DBConnection()

const app = express()
app.use(express.json())



if (process.env.NODE_ENV ==="development"){
    app.use(morgan('dev'))
}

app.use("/api/v1/catigory",categoryRoute)

// catch error from my code and send it to middleware

app.all('*',(req,res,next)=>{
    next(new ApiError(`Can not find this route ${req.originalUrl}`,400))
})

// middleware send it to postman or server

app.use(globalError)

const port = process.env.PORT

const sever = app.listen(port,()=>{
    console.log('App Running');
})

process.on('unhandledRejection',(err)=>{
    console.error(`unhandledRejection error => ${err}`)
    sever.close(()=>{
        process.exit(1)  //close comman after run
    })


})