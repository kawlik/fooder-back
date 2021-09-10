// core modules
const ejs = require( 'ejs' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const passport = require( 'passport' );

// local modules
const config = require( './utility/config' );
const error = require( './utility/error' );
const facebook = require( './utility/facebook' );

// local routers
const authRouter = require( './routes/auth' );
const foodRouter = require( './routes/food' );
const selectRouter = require( './routes/select' );
const typeRouter = require( './routes/type' );
const userRouter = require( './routes/user' );


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

// app view engine
app.set( 'view engine', 'ejs' );

/*  Middleware
/*   *   *   *   *   *   *   *   *   *   */

// express setings
app.use( express.urlencoded({ extended: true }));
app.use( express.static( 'public' ));
app.use( express.json() );

// facebook passport setings
app.use( passport.initialize() );
app.use( passport.session() );
app.use( facebook );

/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

app.use( '/auth', authRouter );
app.use( '/food', foodRouter );
app.use( '/select', selectRouter );
app.use( '/type', typeRouter );
app.use( '/user', userRouter );


/*  Error handlers
/*   *   *   *   *   *   *   *   *   *   */

app.use( error.notFound );
app.use( error.catchAll );

/*  App export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = app;