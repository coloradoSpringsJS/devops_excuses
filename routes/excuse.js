var router = require('express').Router();
var excuse_controller = require('../controllers/excuseController');

//Registering routes
router.post('/',excuse_controller.postExcuse);
//Exporting the router
module.exports = router;
