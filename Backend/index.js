const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
app.use(express.json());
// app.use(express.urlencoded({extend:true}));
app.use(cors());
app.get("/",(req,res)=>{
    res.send("HOme page")
})
const userSchema =new  mongoose.Schema({name:String,email:String,password:String})
const User = new mongoose.model("User",userSchema);

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try
    {
        const existuser = await  User.findOne({email:email})
        if(existuser)
        {
            return res.status(200).send({
                suceess:true,
                message:"Wecome to Page"
            })
        }
        res.status(404).send({
            suceess:false,
            message:"NO USer Found"
        })
        
    }
    catch(error)
    {
        console.log("Error");
    }
   
});
app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body;
    try
    {
        const existuser = await User.findOne({email:email})
        if(existuser)
        {
            return res.status(200).send({
                suceess:false,
                message:"user already exist"
            })
         
        }
        
        const newuser = new User(req.body)
        const createuser = await newuser.save();
        if(createuser)
        {
            res.status(201).send({success:true,message:"user created done"});
        }

    }
    catch(error)
    {
        console.log(error)
        res.status(500).send({success:false,message:"internal server error"})
    }
 

  

})
try
{
mongoose.connect("mongodb+srv://somo:1234@cluster0.wnorvdm.mongodb.net/?retryWrites=true&w=majority")
    console.log("connected");

}
catch(error)
{
    console.log("Error");
}


app.listen(5000,()=>{
    console.log("done");
})