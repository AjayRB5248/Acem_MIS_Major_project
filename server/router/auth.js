const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const multer = require("multer");
const fs = require('fs');
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

require("../db/conn");
const model = require("../models/user");
const { response } = require("express");

router.post("/register", async (req, res) =>{
  const {name,email,password,location,batch,section,faculty}=req.body;
  if(!name || !email || !password || !location || !batch || !section || !faculty){
    return res.status(422).json({error:"Plz fill the field property"});
  }

  model.findOne({ email:email})
  .then((userexist)=>{
    if(userexist){
      return res.status(422).json({error:"Email Already Exist!!"});
    }
    const user = new model ({name, email, password, location, batch, section, faculty});
    user.save().then(()=>{
      res.status(200).json({message:"User Registered successfully"});
    }).catch((err)=>res.status(500).json({error:'Faled to register'}));
  }).catch(err=>{console.log(err);});
});

router.post("/Login", async (req, res) => {
  if (req.body.password && req.body.email) {
    const userLogin = await model.findOne(req.body).select("-password");
    if (userLogin) {
     
      const token = await userLogin.generateAuthToken();
      
      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      return res.send(userLogin);
    } else {
      res.send({ result: "NO USER FOUND" });
    }
  } else {
    res.send({ result: "NO USER FOUND" });
  }
});



module.exports = router;
