const Controller = require( '../utility/controller' );
const model = require( '../models/user' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// returns user based on individual auth token
controller.getOneByAuth = async ( req, res, next ) => {

    // parsing params
    const { auth } = req.params;

    try {

        // data fetch
        const data = await controller.model.findOne({ auth: auth });

        // action success final response
        return res.status( 200 ).json( data );

    } catch( err ) {

        // error event
        return next( err );
    };
};


controller.addOneFriend = async ( req, res, next ) => {

    // parsing params
    const { myID, friendID } = req.params;

    try {

        // data fetch
        const userA = await controller.model.findOne({ _id: myID });
        const userB = await controller.model.findOne({ _id: friendID });

        // checks if both users are available
        if( userA && userB ) {

            // pushes new friend
            userA.friends.push( friendID );
            userB.friends.push( myID );

            // redundancy prevent
            userA.friends = [...new Set( userA.friends )];
            userB.friends = [...new Set( userB.friends )];

            // saves changes
            await userA.save();
            await userB.save();
        }

        // action success final response
        return res.status( 200 ).json( userA );

    } catch( err ) {

        // error event
        return next( err );
    };
};


/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;