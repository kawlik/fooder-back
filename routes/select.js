const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/select' );


/*  GET routes
/*   *   *   *   *   *   *   *   *   *   */

// returns all available items
router.get( '/', controller.findAll );

// returns specified item or null
router.get( '/id/:id', controller.findOneByID );

// returns newest added undone select competition
router.get( '/newest', controller.findNewest );


/*  POST routes
/*   *   *   *   *   *   *   *   *   *   */

// inserts new item
router.post( '/', controller.addOne );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;