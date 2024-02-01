const express = require("express");
const router = new express.Router();
const users = require('../models/userSchema');
const nodemailer = require("nodemailer");

//email config
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL, // generated ethereal email
        pass: process.env.PASSWORD  // generated ethereal password
    }
});

//register user details
router.post("/register",async(req,res)=>{
    const {fname,lname,email,mobile,message} = req.body;

    if(!fname || !lname || !email || !mobile){
        res.status(401).json({status:401,error:"All fields are required!"});
    }

    try {
        const preuser = await users.findOne({email:email});

        if(preuser){
            const userMessage = await preuser.Messagesave(message);
            console.log(userMessage);

            const  mailOptions={
                from : process.env.EMAIL,
                to : email ,
                subject : "Confirmation" ,
                text:"Your Response has been submitted"
            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error"+error);
                }else{
                    console.log('Email sent'+info.response);
                    res.status(201).json({status:201,message:"Email send successfully"})
                }
            });
        }else{
            const finalUser = new users({
                fname,lname,email,mobile,message
            });
            const storeData =await finalUser.save();

            const  mailOptions={
                from : process.env.EMAIL,
                to : email ,
                subject : "Confirmation" ,
                text:"Your Response has been submitted"
            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error"+error);
                }else{
                    console.log('Email sent'+info.response);
                    res.status(201).json({status:201,message:"Email send successfully"})
                }
            });
            res.status(201).json({status:201,storeData});
        }

    } catch (error) {
        res.status(401).json({status:401,error:"All fields are required!"});
        console.log("Catch Error");
    }


})




module.exports = router;