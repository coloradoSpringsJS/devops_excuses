var chai = require('chai');
var sinon = require('sinon');
var sinon_chai = require('sinon-chai');

chai.use(sinon_chai);

var expect = chai.expect;
var should = chai.should();

var home_controller = require("../controllers/homeController");

describe('Home Routes',function() {
    describe('index route',function() {
        var res = {
            send: sinon.spy()
        };
        it('should display Hello World',function(done){
            home_controller.getIndex({},res);
            expect(res.send).to.have.been.calledWith("Hello World");
            done();
        });
    });
});
