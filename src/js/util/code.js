(function (window) {
    'use strict';

    window.add = function (a, b) { return a + b; };
    window.sum = function () {
    	var sum = 0;
    	for(var i = 0; i < arguments.length; i++) {
    		sum += arguments[i];
    	}
    	return sum;
    };
})(window);
