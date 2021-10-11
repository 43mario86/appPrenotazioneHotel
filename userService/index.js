//Import module
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

//Declaration of the instance
const app = express();

//Declaration of the variables
const PORT = process.env.PORT;

//Middleware
app.use(cors());
app.use(morgan('tiny'))

//Routing
app.get('/', (req,res)=>{
    res.end('Sono La Home Route')
});

//Start Server
app.listen(PORT,()=>console.log(`Service on listen port ${PORT}`));