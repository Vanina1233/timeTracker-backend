const express = require("express");
const db = require("../config");

//Assigning db.users to User variable
const User = db.users;

//Function to check if  email already exist in the database
//this is to avoid having two users with the same  email
const saveUser = async (req, res, next) => {
  //search the database to see if user exist
  try {
    //checking if email already exist
    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (emailcheck) {
      return res.json(409).send("Authentication failed");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveUser,
};
