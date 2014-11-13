describe('lunchservice test', function() {
	'use strict';

	var mockedData = [
		{'id':103,'name':'Fiskefillet','price':79},
		{'id':100,'name':'Engelsk Bøf','price':85}
	];

	var lunchService;

	beforeEach(function() {
		lunchService = window.lunchService;
		// lunchService = {
		// 	listAll: function() {
		// 		// todo: use promise
		// 		return mockedData;
		// 	}
		// };
	});

	it('lists all lunchs', function() {
		expect(lunchService.listAllNow()).toContain({'id':100,'name':'Engelsk Bøf','price':85});
	});

	describe('async testing', function(){
		beforeEach(function() {
			jasmine.clock().install();
		});

		afterEach(function() {
			jasmine.clock().uninstall();
		});

		it('lists all promised lunches', function(done) {
			//jasmine.
			var promise = lunchService.listAll();

			jasmine.clock().tick(6000);

			promise.then( function(lunches) {
				expect(lunches).toContain({'id':100,'name':'Engelsk Bøf','price':85});
				done();
			});
		});
		
	});

});

