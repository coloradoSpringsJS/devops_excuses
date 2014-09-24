var excuse_model = require('../lib/excuse');

function getIndex(req,res) {
    excuse_model.getRandom(function(err,excuse) {
        var view_params = {"excuse":excuse.getExcuse()};
        res.render("index.html",view_params);
    });
}

function postExcuse(req,res) {
    var user_excuse = req.body.excuse;

    excuse_model.create(user_excuse,function(err,result) {
        if(err) {
            return res.redirect('/?err=1');
        }
        res.redirect('/?added=1');
    });
}

module.exports = {
    getIndex: getIndex,
    postExcuse: postExcuse
};
