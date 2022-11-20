const Batch = require('../models/batchModel');

const getBatch = async (req, res)=>{
    await Batch.find()
    .then((batches) => {
        res.status(200).json(batches);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
}

const createBatch = async (req,res)=>{

    const {batch, section}= req.body;
  
    const exist = await Batch.findOne({ batch,section});

    if(!exist){
        await Batch.create({ batch, section});
        return res
          .status(201)
          .json({ message: "Batch and Section has created successfully!" });
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: `${batch} ${section}  is already exist` }] });
      }
    }

    const delBatch = async (req,res)=>{
      const batchSection = await Batch.findByIdAndDelete(req.params.id);
      if(!batchSection){
        return res.status(404).json({message: "Batch and Section not found"});
      }
      res.status(200).json({message: "Batch and Section has been deleted successfully"});
    }

       

    module.exports = {getBatch, createBatch,delBatch};