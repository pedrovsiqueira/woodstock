//requerer o mongoose
const mongoose = require( 'mongoose' )
const Band = require('./models/Band')
const Stage = require('./models/Stage')

const dbHost = 'localhost'
const dbName = 'woodstock-app'

mongoose
    // .connect( 'mongodb://localhost/woodstock-app', {
    .connect( `mongodb://${dbHost}/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } )
    .then( _ => console.log( 'connected to database' ) )
    .catch( error => console.log( error ) )

//instanciar band

const band1 = new Band( {
    name: 'Linkin Park',
    style: 'Rock'
} )

const band2 = new Band( {
    name: 'Three Doors Down',
    style: 'Rock'
} )

const band3 = new Band( {
    name: 'Guns and roses',
    style: 'Rock'
} )

const stage1 = new Stage({
    name: "Rockinator",
    location: "Main Area"
})

stage1.save()

Band
    .insertMany( [ band1, band2, band3 ] )
    .then( response => {
        allBands()
        console.log( `${response.length} bands added` )
    } )
    .catch( error => console.log( error ) )

const allBands = () => {
    Band
        .find()
        .then( bands => {
            let str = ''
            bands.forEach( ( bands, index ) => {
                str += `${index + 1}: ${bands.name} - ${bands.style}\n`
            } )
            return console.log( str )
        } )
        .catch( error => console.log( error ) )
}