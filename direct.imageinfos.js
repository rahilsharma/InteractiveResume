(function () {
    'use strict';
    window.angular.module("rahilresume").directive('imageinfo', function() {

        var linker = function(scope,element,attrs){

    };
    return {
        link:linker,
        restrict:'AE',
        template:'<div class="row">' +
        '<div class="col-lg-10 col-sm-10 col-md-10">' +
        '</div>' +
        '<div class="col-lg-2 col-sm-12">' +
        '<img  ng-src="http://rahilsharma.tk/images/profilepic.jpg" class="cstImg"/>' +

        '</div> ' +
        '</div>',
        scope: {
            iim : '='
        }
    };
});
}).call();