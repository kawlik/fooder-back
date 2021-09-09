const mongoose = require( 'mongoose' );


/*  Schema init
/*   *   *   *   *   *   *   *   *   *   */

const schema = new mongoose.Schema({

    // food name
    name: { type: String, required: true, },

    // food type
    type: { type: String, required: true, default: 'unknown' },

    // food img url based on ObjectId
    img: { type: String, required: true, },
});


/*  Model export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = mongoose.model( 'food', schema );