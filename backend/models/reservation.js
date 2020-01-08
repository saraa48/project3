const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
    name:{type:String,required:true},
    date:{type:Date, required:true},
    phone:{type:Number ,required:true},
    heure:{type:Number , required:true},
    NbPersonne:{type:Number,required:true},
    email:{type:String,required:true}
}) 

module.exports = Reservation = mongoose.model('Reservation',ReservationSchema )