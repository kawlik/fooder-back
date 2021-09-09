const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/food' );


/*  GET routes
/*   *   *   *   *   *   *   *   *   *   */

// returns all available items
router.get( '/', controller.findAll );

// returns specified item or null
router.get( '/id/:id', controller.findOneByID );


/*  POST routes
/*   *   *   *   *   *   *   *   *   *   */

// inserts new item
router.get( '/', controller.addOne );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;