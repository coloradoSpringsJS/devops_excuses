var mongoose = require("../lib/mongoose");

var Schema = mongoose.Schema;

var excuse_schema = new Schema({
    "excuse":String
});

module.exports = mongoose.model("Excuse",excuse_schema);
