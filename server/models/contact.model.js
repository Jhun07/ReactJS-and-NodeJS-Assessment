const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const contactSchema = new Schema(
    {
        fullname: {
            type:String,
            required:true,
            trim:true
        },

        emailAddress: {
            type:String,
            required:true,
            trim:true
        },

        contactNumber: {
            type:Number,
            required:true,
            trim:true
        },
        
        location: {
            type:String,
            required:true,
            trim:true
        },
        
        registeredDate: {
            type:String,
            required:true,
            trim:true
        },
    },
    {
        timestamps:true,
    }
);

const Contact = mongoose.model('contact', contactSchema);
module.exports = Contact;