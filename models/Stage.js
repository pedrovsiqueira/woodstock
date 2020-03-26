const mongoose = require( 'mongoose' )

const Stage = mongoose.model( 'Stage', {
    name: String,
    locacation: String,
} )

module.exports = Stage
