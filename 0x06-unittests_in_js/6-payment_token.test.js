const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
 it('should test the result of getPaymentTokenFromAPI(true)', function (done) {
   getPaymentTokenFromAPI(true)
     .then(response => {
       expect(response).to.deep.equal({ data: 'Successful response from the API' });
       done();
     });
 });
});
