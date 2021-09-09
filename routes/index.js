const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/index' );


/*  GET routes
/*   *   *   *   *   *   *   *   *   *   */

// returns all available items
router.get( '/', controller.homePage );



/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;