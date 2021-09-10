const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/user' );


/*  GET routes
/*   *   *   *   *   *   *   *   *   *   */

// returns all available items
router.get( '/', controller.findAll );

// returns specified item or null
router.get( '/id/:id', controller.findOneByID );

// returns all available items
router.get( '/auth/:auth', controller.getOneByAuth );


/*  PUT routes
/*   *   *   *   *   *   *   *   *   *   */

// inserts new item
router.put( '/friend/:myID/:friendID', controller.addOneFriend );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;