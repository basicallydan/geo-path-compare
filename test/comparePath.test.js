var geoPathCompare = require('../main.js');

describe('GeoPathCompare', function(){
	describe('#comparePath()', function(){
		it('should return 1 when the two paths are exactly the same', function (){
			geoPathCompare.comparePath(
				[
					{ lat : 0.1, lng : 0.2 }
				],
				[
					{ lat : 0.2, lng : 0.2 }
				]
			).should.equal(1);
		});

		it('should return 0.5 when it matches half the path but not the rest', function () {
			geoPathCompare.comparePath(
				[
					{ lat : 0.1, lng : 0.2 }
				],
				[
					{ lat : 0.2, lng : 0.2 }
				]
			).should.equal(0.5);
		});
	});
});