const mongoose = require( 'mongoose' );


/*  Schema init
/*   *   *   *   *   *   *   *   *   *   */

const schema = new mongoose.Schema({

    // type name
    name: { type: String, required: true, },

    // type leead color
    color: { type: String, required: true, },
});


/*  Model export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = mongoose.model( 'type', schema );