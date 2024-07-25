const request = require('request');
const { expect } = require('chai');

describe('Payment System API', function () {
  it('should return a 200 status code for the index page', function (done) {
    request('http://localhost:7865', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should display "Welcome to the payment system" on the index page', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should not display "Something else" on the index page', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.not.equal('Something else');
      done();
    });
  });

  it('should handle valid cart IDs with a 200 status code', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return a 404 status code for invalid cart IDs', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  describe('/login', function () {
    it('should welcome the user with their username', function (done) {
      const options = {
        method: 'POST',
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' }
      };

      request(options, function (error, response, body) {
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('/available_payments', function () {
    it('should provide available payment methods', function (done) {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };

      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

