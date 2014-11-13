(function (window) {
    'use strict';

    window.add = function (a, b) { return a + b; };
    window.sum = function () {
    	var sum = 0, i;
    	for(i=0; i < arguments.length; i+=1) {
    		sum += arguments[i];
    	}
    	return sum;
    };
})(window);
