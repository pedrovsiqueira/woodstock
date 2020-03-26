const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const bandSchema = new Schema( {
    name: {
        type: String,
        required: true
    },
    style: {
        type: String,
        enum: ['Rock', 'Psychadelic Rock']
    },
    artists: [ {
        name: String,
        age: Number,
        profileUrl: {
            type: String,
            default: 'https.www.google.com'
        }
    } ],
    year: {
        type: Number,
        min: 1960,
        max: 2000
    }
} )

const Band = mongoose.model( 'Band', bandSchema )

module.exports = Band