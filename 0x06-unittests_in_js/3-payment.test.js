const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('test should invoke Utils.calculateNumber with the right arguments then log result', function () {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(utilsSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    utilsSpy.restore();
    logSpy.restore();
  });
});
