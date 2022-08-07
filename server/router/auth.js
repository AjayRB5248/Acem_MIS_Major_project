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

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/Upload", upload.single("testImage"), (req, res) => {
//   const saveImage =  model({
//     name: req.body.name,

//     image: {
//       data: fs.readFileSync("uploads/" + req.file.filename),
//       contentType: "image/png,image/jpeg,image/jpg",
//     },
//   });
//   saveImage
//     .save()
//     .then((res) => {
//       console.log("image is saved");
//     })
//     .catch((err) => {
//       console.log(err, "error has occur");
//     });
//     res.send('image is saved')
// });

// router.post('/Login', async (req,res)=>{
//    try{
//     const { email , password} = req.body;
//     if(!email || !password){
//         return res.status(400).json({
//             error:"Plz fill the form"
//         })

//     }
//     if(req.body.password && req.body.email){

//         const userLogin= await model.findOne({ email});
//         console.log(userLogin);

//         if(userLogin){

//             const token= await userLogin.generateAuthToken();
//             console.log(token);
//             // if(!pass) {
//                 //     res.status(400).json({error:"Invalid Inputs"})
//                 // }   else{
//                     //     res.json({message:"user Sign In Successfully"})
//                     // }

//                     res.cookie("jwttoken", token,{
//                         expires: new Date(Date.now()+ 25892000000),
//                         httpOnly:true
//                     })
//                 }else{
//                     window.alert("Invalid Credentials")
//                 }

//             }
//             }catch(err){
//                 console.log(err);
//    }
// });

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

// router.get('/Login/:id' , (req,res,next)=>{
//   res.send(req.rootuser)
//   console.log(req.params.id);
//   model.findById(req.params.id)
//   .then(result=>{
//     res.status(200).json({
//       StudentInformation:result
//     })
//   })
//   .catch(err=>{
//     console.log(err)
//     res.status(500).json({
//       error:err
//     })
//   })
// })

module.exports = router;
