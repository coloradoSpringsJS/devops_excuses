var router = require('express').Router();
var home_controller = require('../controllers/homeController');

//Registering routes
router.get('/',home_controller.getIndex);

//Exporting the router
module.exports = router;

