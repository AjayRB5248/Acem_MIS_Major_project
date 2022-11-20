const Admin = require ('../models/adminModel')

const createAdmin = async (req,res)=>{
    const {email,password}= req.body;
    try{
        const exist = await Admin.findOne({email});
        if(!exist){
            await Admin.create({email,password});
            return res
            .status(201)
            .json({ message: "Admin has created successfully!" });  
        }else{
            return res
            .status(400)
            .json({ errors: [{ msg: `${email} is already exist` }] });
        }   
    }catch(err){
        console.log(err);
    }
}

const getAdmins = async (req,res)=>{
    await Admin.find()
    .then((admins) => {
        res.status(200).json(admins);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
}

const loginAdmin = async (req,res)=>{
    const {email,password}= req.body;
    try{
        const exist = await Admin.findOne({email});
        if(exist){
            if(exist.password === password){
                const token = exist.generateAuthToken();
                return res
                .status(200)
                .json({ email,token});
            }else{
                return res
                .status(400)
                .json({ errors: [{ msg: "Password is incorrect" }] });
            }
        }else{
            return res
            .status(400)
            .json({ errors: [{ msg: `${email} is not exist` }] });
        }
    }catch(err){
        console.log(err);
    }
}

module.exports= {createAdmin, getAdmins, loginAdmin}