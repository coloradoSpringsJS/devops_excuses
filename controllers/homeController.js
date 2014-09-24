var excuse_model = require('../lib/excuse');

function getIndex(req,res) {
    excuse_model.getRandom(function(err,excuse) {
        res.render("index.html",excuse);
    });
}

module.exports = {
    getIndex: getIndex
};
