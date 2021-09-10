const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/auth' );
const passport = require( 'passport' );


/*  FACEBOOK GET routes
/*   *   *   *   *   *   *   *   *   *   */

// facebook auth start event
router.get( '/facebook', controller.authStart );

// facebook auth callback & success event
router.get( '/facebook/callback', controller.authCallback, controller.authSuccess );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;