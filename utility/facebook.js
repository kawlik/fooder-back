const passport = require( 'passport' );
const FacebookStrategy = require( 'passport-facebook' ).Strategy;

// std app config
const config = require( './config' );

/*  Facebook init middleware
/*   *   *   *   *   *   *   *   *   *   */

const facebook = ( req, res, next ) => {

    try {

        // facebook persist and retrieve user data 
        passport.serializeUser(( user, done ) => done( null, user ));
        passport.deserializeUser(( user, done ) => done( null, user ));

        // facebook passport start
        passport.use( new FacebookStrategy( config.passport, ( accessToken, refreshToken, profile, cb ) => cb( null, profile )));

        // next event
        return next();

    } catch( err ) {

        // error event
        return next( err );
    };
};


/*  Facebook export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = facebook;