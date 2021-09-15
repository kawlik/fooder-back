const Controller = require( '../utility/controller' );
const model = require( '../models/select' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// returns last added undone item
controller.findNewest = async ( req, res, next ) => {

    // parsing params
    const { user } = req.param;

    try {
        
        // data fetch
        const data = await controller.model.find({ participanst: user, done: true }).sort({ _id: -1 });
    
        // action success final response
        return res.status( 200 ).json( data );
    
    } catch( err ) {
    
        // error event
        return next( err );
    };
};

// returns last added undone item
controller.findWaiting = async ( req, res, next ) => {

    // parsing params
    const { user } = req.param;

    try {
        
        // data fetch
        const data = await controller.model.find({ participanst: user, done: false });
    
        // action success final response
        return res.status( 200 ).json( data );
    
    } catch( err ) {
    
        // error event
        return next( err );
    };
};

// updates one select
controller.updateOne = async ( req, res, next ) => {

    // parsing request
    const { id } = req.params;
    const { set, participant } = req.body;

    try {

        // data fetch
        const data = await controller.model.findOne({ _id: id });

        // is data fetched
        if( data && !data.done && !data.realizedBy.includes( participant )) {

            // data update
            data.sets.push( set );
            data.participants.push( participant );
            data.realizedBy.push( participant );

            // data trim
            data.participants = [...new Set( data.participants )];
            data.realizedBy = [...new Set( data.realizedBy )];

            // select done check
            let isSelectDone = true;
            data.participants.forEach( elem => {

                if( !data.realizedBy.includes( elem )) { 

                    // seleci is not done
                    isSelectDone = false;
                };
            });

            // select done check
            if( isSelectDone ) {

                // result parse
                const result = data.sets.reduce(( prev, next ) => [ ...prev, ...next ]);
                result.sort(( prev, next ) => prev?._id > next?._id ? -1 : 1 );

                // result calculate
                data.result = [];

                result.forEach(( elem, i ) => {
                    
                    if( elem._id === result[ i + 1 ]?._id ) {

                        // score update
                        result[ i + 1 ].score += elem.score;

                    } else {

                        // final result push
                        data.result.push( elem );
                    }
                });

                // data done update
                data.done = true;
            };

            // data volume reduce
            data.sets = [];

            // data save
            await data.save();
        };

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