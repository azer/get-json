var getJSON = require("./");

it('simply gets JSON', function(done){

  getJSON('http://multiplayerchess.com/api', function(error, body){

    expect(body.ok).to.be.true;

    done();

  });

});
