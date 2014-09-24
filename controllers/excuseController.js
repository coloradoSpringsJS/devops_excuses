var excuse_model = require('../lib/excuse');

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
    postExcuse: postExcuse
};
