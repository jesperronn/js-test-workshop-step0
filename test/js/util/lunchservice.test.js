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

	it('lists all promised lunches', function(done) {
		lunchService.listAll().then( function(lunches) {
			expect(lunches).toContain({'id':100,'name':'Engelsk Bøf','price':85});
			done();
		});
	});
});

