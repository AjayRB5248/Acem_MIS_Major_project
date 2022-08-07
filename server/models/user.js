const mongoose = require("mongoose");
const express = require('express');
const app= express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(bodyParser.urlencoded({ extended: true }));

const User = new mongoose.Schema({
  name: {
    type: String,
    unique:false
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  faculty: {
    type: String,
  },
  location: {
    type: String,
  },
  section: {
    type: String,
  },
  batch: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique:false
  },
  image:{
    data:Buffer,
    contentType: String,
  },
  
  tokens: [
    {
      token: {
        type: String,
        required: true,
      }
    }
  ]
});
User.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const model = mongoose.model("75BCTA", User);

module.exports = model;
