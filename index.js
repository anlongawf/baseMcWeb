require("dotenv").config();
const express = require('express')
const db = require("./src/config/database");
const webRouter = require('./src/routes/web.js'); 
const configViewEngine = require('./src/config/viewEngine.js')
const app = express()


// Config Template Ejs
//config template engine
configViewEngine(app)
//Config Routers
app.use('',webRouter)



app.listen(3000)