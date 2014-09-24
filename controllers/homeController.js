function getIndex(req,res) {
    res.render("index.html",{"excuse":"Some Excuse Here"});
}

module.exports = {
    getIndex: getIndex
};
