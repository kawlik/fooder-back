const Controller = require( '../utility/controller' );
const model = require( '../models/select' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// returns last added undone item
controller.findNewest = async ( req, res, next ) => {

    try {
        
        // data fetch
        const data = await controller.model.find().sort({ _id: -1 }).limit( 3 );
    
        // action success final response
        return res.status( 200 ).json( data );
    
    } catch( err ) {
    
        // error event
        return next( err );
    };
};


/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;