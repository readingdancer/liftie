var should = require('should');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/resorts/caberfae-peaks');

/*global describe, it */
describe('parse caberfae-peaks', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/caberfae-peaks.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
        'North Peak Quad': 'closed',
        'Shelter Double': 'closed',
        'Taxi Surface': 'closed',
        'South Peak Triple': 'closed',
        'Clubhouse Double': 'closed',
        'Lollipop Surface': 'closed'
      };
      should.exist(status);
      status.should.eql(expected);
      done(err);
    }));
  });
});