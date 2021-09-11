const mongoose = require( 'mongoose' );


/*  Schema init
/*   *   *   *   *   *   *   *   *   *   */

const schema = new mongoose.Schema({

    // selection participants
    participants: { type: Array, required: true, },
    realizedBy: { type: Array, required: true, default: [], },

    // selection sets
    sets: { type: Array, required: true, default: [], },

    // selection done state
    done: { type: Boolean, required: true, default: false, },

    // selection date
    date: { type: Date, required: true, default: Date.now(), },

    // selection result
    result: { type: Array, },
});


/*  Model export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = mongoose.model( 'select', schema );