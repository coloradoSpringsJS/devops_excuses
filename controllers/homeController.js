var excuse_model = require('../lib/excuse');

function getIndex(req,res) {
    excuse_model.getRandom(function(err,excuse) {
        var view_params = {"excuse":excuse.getExcuse()};
        res.render("index.html",view_params);
    });
}

module.exports = {
    getIndex: getIndex
};
