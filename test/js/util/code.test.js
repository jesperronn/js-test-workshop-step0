describe('all utils', function() {
	'use strict';

	describe('util.add', function () {
	    var add = window.add;

	    it('should sum', function () {
	        expect(add(2, 3)).toBe(5);
	        expect(add(4, 3)).toBe(7);
	    });

	    it('should sum negatively', function () {
	        expect(add(-2, -3)).toBe(-5);
	        expect(add(-4, 3)).toBe(-1);
	    });


	});

	describe('util.sum', function(){
		var sum = window.sum;

		it('should sum two arguments', function() {
			expect(sum(2,3)).toBe(5);
		});

		it('should sum many arguments', function() {
			expect(sum(1,2,3,4,5,6)).toBe(21);
		});

		it('should return 0 for zero arguments', function() {
			expect(sum()).toBe(0);
		});

		xit('should return number for number and number-ish string', function() {
			expect(sum(2, '2')).toBe(4);
		});

		xit('should return number for number and number-ish string', function() {
			expect(sum(2, 3, 'not a number')).toBe(5);
		});
	});
});

