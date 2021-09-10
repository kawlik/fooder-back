/*  Controler basic attributes
/*   *   *   *   *   *   *   *   *   *   */

class Controller {

    constructor( model = null ) {

        this.model = model;
    };

    /*  CREATE actions
    /*   *   *   *   *   *   *   *   *   *   */

    // tries to insert new item and returns action status
    addOne = async ( req, res, next ) => {

        // parsing req body
        const { body } = req;

        try {

            // creating new item
            const data = await new this.model( body );

            // saving new item
            await data.save();

            // action success final response
            return res.status( 200 ).json( data );

        } catch( err ) {

            // error event
            return next( err );
        };
    };


    /*  READ actions
    /*   *   *   *   *   *   *   *   *   *   */

    // returns an array of all available items
    findAll = async ( req, res, next ) => {

        try {
        
            // data fetch
            const data = await this.model.find();
        
            // action success final response
            return res.status( 200 ).json( data );
        
        } catch( err ) {
        
            // error event
            return next( err );
        };
    };

    // returns matched item or null
    findOneByID = async ( req, res, next ) => {

        // parsing params
        const { id } = req.params;

        try {

            // data fetch
            const data = await this.model.findOne({ _id: id });

            // action success final response
            return res.status( 200 ).json( data );

        } catch( err ) {

            // error event
            return next( err );
        };
    };


    /*  OTHER actions
    /*   *   *   *   *   *   *   *   *   *   */

};

/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = Controller;