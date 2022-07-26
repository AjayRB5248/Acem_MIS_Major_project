const express = require ('express');
const app = express();
const dotenv = require('dotenv')
const cors = require ("cors");
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

dotenv.config({path:'./config.env'});

require('./db/conn')

const model = require('./models/user')

app.use(require('./router/auth'))

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true} ));

app.use(bodyParser.json()) ;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("HELLo WOrld");
})
 app.listen(8000,()=>{
    console.log("Server Started");
 })