const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
    date:{type:Number, required:true},
    phone:{type:Number ,required:true},
    heure:{type:Number , required:true},
    NbPersonne:{type:Number,required:true}
}) 

module.exports = Reservation = mongoose.model('Reservation',ReservationSchema )