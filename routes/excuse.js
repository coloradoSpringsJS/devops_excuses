var router = require('express').Router();
var excuse_controller = require('../controllers/excuseController');

//Registering routes
router.get('/:excuse_id',excuse_controller.getExcuse);
router.post('/',excuse_controller.postExcuse);
//Exporting the router
module.exports = router;
