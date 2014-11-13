(function (window, $) {
    'use strict';

    var mockedData = [
		{'id':103,'name':'Fiskefillet','price':79},
		{'id':100,'name':'Engelsk Bøf','price':85}
	];

    window.lunchService = {
    	DELAY: 500,
    	listAll: function() {
	    	var deferred = $.Deferred();
	        window.setTimeout(function () {
	            deferred.resolve(mockedData);
	        }, this.DELAY);
	        return deferred.promise();
	    },
	    listAllNow: function() { return mockedData; }
	};

    // window.allCheaperThan = function(number) {
    // 	var deferred = $.Deferred();
    //     window.setTimeout(function () {


    //         deferred.resolve(foundList);
    //     }, 500);
    //     return deferred.promise();
    // }

})(window, jQuery);
