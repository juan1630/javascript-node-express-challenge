const { Schema, model } = require('mongoose')


const ticketSchema = new Schema({


    name:{ 
        type: String,
        trim:true,
        required: true
    },
    email:{ 
        type: String,
        trim:true,
        required: true
    },
    origin:{ 
        type: String,
        trim:true,
        required: true
    },
    destination: {
        type: String,
        trim:true,
        required: true
    },
    departureDate: {
        type: String,
        trim:true,
        required: true
    },
    time : {
        type: String,
        trim:true,
        required: true
    },
    duration: {
        type: String,
        trim:true,
        required: true
    }

});

module.exports = model('ticket', ticketSchema);