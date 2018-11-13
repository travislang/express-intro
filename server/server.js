
// require express medules
let express = require( 'express' );

// run express and save the return class to app
let app = express( );
const PORT = 5000;

// use for static assets
app.use( express.static( 'server/public' ) );

// listening for localhost:5000/vega
app.get( '/vega', function( req, res ){
    //say hello to vega
    let vegaStudents = [ 'said', 'carson', 'john' ];
    res.send( vegaStudents )
} );

// listen for traffic on port
app.listen( PORT, function( ){
    console.log( `listening on port ${PORT}` );
})
