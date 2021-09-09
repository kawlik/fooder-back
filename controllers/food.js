const Controller = require( '../utility/controller' );
const model = require( '../models/food' );

// additional modules
const formidable = require( 'formidable' );
const path = require( 'path' );

const mongoose = require( 'mongoose' );
const fs = require( 'fs' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// tries to insert new item and returns action status
controller.addOne = async ( req, res, next ) => {

    // basic setup
    const form = new formidable.IncomingForm();
    const uploadFolder = path.join( __dirname, '../public/img/' );

    // form config
    form.multiples = true;
    form.uploadDir = uploadFolder;

    // item model schema
    const itemModel = {
        _id: null,
        img: null,
        name: null,
        type: null,
    };

    // form parsing
    form.parse( req, async ( error, fields, files ) => {

        // initial error check
        if( error ) { return next( error ); }

        try {

            // file parse
            const { file } = files;

            // file size check
            if( file.size > 5 * 1024 * 1024 ) { 
                
                return next( new Error( 'File size is over the 5MB limit.' ));
            }
            
            // file rename with proper extention
            const _id = new mongoose.Types.ObjectId();
            const img = _id.toString() + path.extname( file.name );

            // saving file on server
            await fs.rename( file.path, path.join( uploadFolder, img ), ( error ) => {

                // upload error check
                if( error ) { return next( error ); }
            });

            // updating item model
            itemModel._id = _id;
            itemModel.img = img;
            itemModel.name = fields.name;
            itemModel.type = fields.type;

            // creating new item
            const data = await new controller.model( itemModel );

            // saving new item
            await data.save();

            // action success final response
            return res.status( 201 ).json( data );

        } catch( err ) {

            // error event
            return next( err );
        };
    });
};

/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;