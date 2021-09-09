// core modules
const express = require( 'express' );
const mongoose = require( 'mongoose' );

// local modules
const config = require( './utility/config' );
const error = require( './utility/error' );

// local routers
const indexRouter = require( './routes/index' );
const foodRouter = require( './routes/food' );


/*  App & db init
/*   *   *   *   *   *   *   *   *   *   */

// db connection
mongoose.connect( config.db.link, config.db.options, ( err ) => {

    // on error event
    if( err ) { return console.error( err.message ); }

    // on connect console information
    console.log( 'DB connected successfully!' );
});

// app init
const app = express();


/*  Middleware
/*   *   *   *   *   *   *   *   *   *   */

app.use( express.urlencoded({ extended: true }));
app.use( express.json() );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

app.use( '/', indexRouter );
app.use( '/food', foodRouter );


/*  Error handlers
/*   *   *   *   *   *   *   *   *   *   */

app.use( error.notFound );
app.use( error.catchAll );

/*  App export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = app;