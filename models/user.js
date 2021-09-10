const mongoose = require( 'mongoose' );


/*  Schema init
/*   *   *   *   *   *   *   *   *   *   */

const schema = new mongoose.Schema({

    // auth individual token
    auth: { type: String, required: true, },

    // user body object
    body: { type: Object, required: true, },

    // user friends
    friends: { type: Array, default: [], },
});


/*  Model export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = mongoose.model( 'user', schema );