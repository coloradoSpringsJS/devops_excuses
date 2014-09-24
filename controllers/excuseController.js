var excuse_model = require('../lib/excuse');

function getExcuse(req,res) {
    var id = req.params.excuse_id;

    excuse_model.find(id,function(err,result) {
        if(err) {
            return res.render("index.html",{excuse:"MELLON MELLON MELLON OUT OF CHEESE ERROR"});
        }
        res.render("index.html",{excuse:result.getExcuse()});
    });
}

function postExcuse(req,res) {
    var user_excuse = req.body.excuse;
    excuse_model.create(user_excuse,function(err,result) {
        res.redirect('/excuse/'+result.getId());
    });
}

module.exports = {
    getExcuse: getExcuse,
    postExcuse: postExcuse
};
