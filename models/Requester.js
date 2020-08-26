const mongoose = require("mongoose");
const validator = require("validator");

const requesterSchema = new mongoose.Schema({
    country:{
        type: String, 
        required:true
    },
    fName:{
        type: String, 
        required:true,        
    },
    lName:{
        type: String,
        required:true,        
    },
    email:{
        type: String,
        lowercase:true,
        required:true,
        validate(value){
            if (!validator.isEmail(value))
                throw new Error('The email is not valid!');
        }        
    },
    password:{
        type: String, 
        minlength:8,
        required:true,        
    },
    address:{
        type: String, 
        required:true,        
    },
    city:{
        type: String,
        required:true,        
    },
    state:{
        type: String, 
        required:true,        
    },
    postCode:{
        type: Number
    },
    mobileNumber:{
        type: String,
        validate(value){
            if(value){
                if (!validator.isMobilePhone(value, 'en-AU'))
                    throw new Error('The mobile number is not valid!');
            }
        }               
    }
});

module.exports  =  mongoose.model("Requester", requesterSchema)