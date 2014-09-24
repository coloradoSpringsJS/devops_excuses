var excuse_model = require("../models/excuse");

function rand(low, high) {
    return Math.random() * (high - low) + low;
}

function excuse_factory() {
    var excuse = null;

    return {
        getId: function getId() {
            return excuse.id;
        },
        getExcuse: function getExcuse() {
            return excuse.excuse;
        },
        setExcuse: function setExcuse(new_excuse) {
            if(typeof new_excuse === "string") {
                excuse.excuse = new_excuse;
            }
        },
        setModel: function setModel(model) {
            if(excuse===null) {
                excuse = model;
                return true;
            }
            return false;
        },
        save: function save(callback) {
            excuse.save(function(err) {
                if(err) {
                    return callback(err,null);
                }
                callback(null,true);
            });
        }
    };
}

function create(user_excuse,callback) {
    var new_excuse = excuse_factory();

    excuse_model.create({excuse:user_excuse},function(err,saved_excuse) {
        if(err) {
            return callback(err,null);
        }

        new_excuse.setModel(saved_excuse);
        callback(null,new_excuse);
    });
}

function find(id,callback) {
    var new_excuse = excuse_fact();

    excuse_model.findOne({"id":id},function(err,result) {
        if(err) {
            return callback(err,null);
        }

        if(!result || result.length===0) {
            return callback(null,null);
        }
        new_excuse.setModel(result);
        return new_excuse;
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

        excuse.setModel(result[0]);
        callback(null,excuse);
    });
}

function excuse_fact() {
    return excuse_factory();
}

module.exports = {
    get: excuse_fact,
    getRandom: getRandom,
    find: find,
    create: create
};
