const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and log result', function () {
    const utilsStub = sinon.stub(Utils, 'calculateNumber');
    utilsStub.returns(10);
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(utilsStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    utilsStub.restore();
    logSpy.restore();
  });
});
