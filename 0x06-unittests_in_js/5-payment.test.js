const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let logSpy;

  beforeEach(function () {
    logSpy = sinon.spy(console, 'log');
  });

  it('should log The total is: 120', function () {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log The total is: 30', function () {
    sendPaymentRequestToApi(10, 20);
    expect(logSpy.calledOnceWithExactly('The total is: 30')).to.be.true;
  });

  afterEach(function () {
    logSpy.restore();
  });
});
