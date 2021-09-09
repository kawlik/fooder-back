const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/type' );


/*  GET routes
/*   *   *   *   *   *   *   *   *   *   */

// returns all available items
router.get( '/', controller.findAll );


/*  POST routes
/*   *   *   *   *   *   *   *   *   *   */

// inserts new item
router.post( '/', controller.addOne );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;