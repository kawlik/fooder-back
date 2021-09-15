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

// returns newest added done select competition
router.get( '/newest/:user', controller.findNewest );

// returns newest added undone select competition
router.get( '/waiting/:user', controller.findWaiting );


/*  POST routes
/*   *   *   *   *   *   *   *   *   *   */

// inserts new item
router.post( '/', controller.addOne );


/*  PUT routes
/*   *   *   *   *   *   *   *   *   *   */

// update specified item item
router.put( '/id/:id', controller.updateOne );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;