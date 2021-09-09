const Controller = require( '../utility/controller' );

// additional modules
const path = require( 'path' );

// controller init
const controller = new Controller();


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

controller.homePage = async ( req, res, next ) => {
    
    try {

        // home file path
        const homePageFile = path.join( __dirname, '../public/index.html' );
    
        // action success final response
        return res.status( 200 ).sendFile( homePageFile );
        
    } catch( err ) {
        
        // error event
        return next( err );
    };
};

/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;