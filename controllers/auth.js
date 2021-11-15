const Controller = require( '../utility/controller' );
const model = require( '../models/user' );

// additional modules
const passport = require( 'passport' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// facebook auth start event
controller.authStart = passport.authenticate( 'facebook' );

// facebook auth callback event
controller.authCallback = passport.authenticate( 'facebook', { failureRedirect: '/' });

// facebook auth success event
controller.authSuccess = async ( req, res, next ) => {

    try {

        // parsing request
        const auth = req.user.id;
        const body = req.user._json;

        // checking database for user
        const test = await controller.model.find({ auth: auth });

        // length check
        if( !test.length ) {

            // profile picture revrite
            body.picture.data.url = new URL( `https://graph.facebook.com/${ auth }/picture?type=square` );
            
            // creating new item
            const data = await new controller.model({ auth, body });

            // user secret id delete
            delete data.body.id;
    
            // saving new item
            await data.save();
        };

        // logout user
        req.logout();

        // action success final response
        return res.status( 200 ).render( 'token', { auth: auth });

    } catch( err ) {

        // error event
        return next( err );
    };
};

/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;