
const User = require("../Nodel/usermodel")
const bcrypt = require('bcryptjs');
const signup = async(req , res)=>{
try {
    const{name , email , password }  = req.body;
    const user = await User.findOne({email})
    if (user) {
        return res.status(400).json({message:"user already exists"});

    }

    const hashpassword = await bcrypt.hash(password , 10);
  
    const createdUser = new User({
       name: name, 
        email: email, 
        password: hashpassword,
    })
   await createdUser.save();
    res.status(201).json({message: "user created sucessfully" 
        , user : {
            name : name,
            email : email
        }
    })
} catch (error) {
    console.log(error);
}
}


const login = async (req ,res)=>{
    try {
        const{email , password} = req.body;
       const user =  await User.findOne({email});
       
       if (!user) {
        res.json({message:"incorrect email"})
       }
       else{
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            res.json({message:"invalid  password"})
        }
        else{
            res.status(200).json({message : "user log in" , user : {
                _id :user._id,
                name : user.name,
                email : user.email
            }})
        }
       }
    } catch (error) {
        console.log("error in login ")
    }
}

module.exports = {signup, login}