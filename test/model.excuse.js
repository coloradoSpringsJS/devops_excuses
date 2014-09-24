var chai = require("chai");
var sinon = require("sinon");
var sinon_chai = require("sinon-chai");

chai.use(sinon_chai);

var expect = chai.expect;
var should = chai.should();

var excuse = require("../lib/excuse");

describe("Excuse Model",function() {
    describe("finding excuses",function() {
        it("should return a random excuse",function(done){
            excuse.getRandom(function(err,result) {
                expect(err).to.not.exist;
                expect(result.excuse.excuse).to.be.a("string");
                done();
            });
        });
    });
});
