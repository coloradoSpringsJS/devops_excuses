var excuse_model = require("../models/excuse");

function rand(low, high) {
    return Math.random() * (high - low) + low;
}

function excuse_factory() {
    var excuse = {};

    return {
        excuse: excuse,
        setExcuse: function setExcuse(new_excuse) {
            if(typeof new_excuse === "string") {
                excuse.excuse = new_excuse;
            }
        },
        mapResult: function mapResult(result) {
            excuse.id = result.id;
            excuse.excuse = result.excuse;
        }
    };
}

function find(id,callback) {
    var excuse = excuse_fact();

    excuse_model.find({"id":id},function(err,result) {
        if(err) {
            return callback(err,null);
        }

        if(!result || result.length===0) {
            return callback(null,null);
        }

        excuse.mapResult(result[0]);
        return excuse;
    });
}

function getRandom(callback) {
    var excuse = excuse_fact();

    excuse_model.find({},{},{skip:rand(1,465),limit:1},function(err,result){
        if(err) {
            return callback(err,null);
        }

        if(!result || result.length===0) {
            return callback(null,null);
        }

        excuse.mapResult(result[0]);
        callback(null,excuse);
    });
}

function excuse_fact() {
    return excuse_factory();
}

module.exports = {
    get: excuse_fact,
    getRandom: getRandom,
    find: find
};
