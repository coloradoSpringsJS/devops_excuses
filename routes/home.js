var router = require('express').Router();

router.get('/',index);

function index(req,res) {
    res.send('Hello World');
}

module.exports = router;
