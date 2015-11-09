(function () {
	'use strict';

	var _ = window._;
	window.angular.module("rahilresume").controller('resumeController', ['$scope', 'rahilResumeService', function($scope, rahilResumeService) {
		function init() {
			rahilResumeService.getrahilResume().then(function(data) {
				$scope.resume = data;
				$scope.activeSkills = {};
				_.each($scope.resume.skills, function (val) {
					$scope.activeSkills[val] = true;
				});
				$scope.blogSeparatorStyle = (data.github && data.blog) ? {} : {'visibility' : 'hidden'};
			}, function (error) {

			});
		}

		$scope.containsActiveSkills = rahilResumeService.containsActiveSkills;

		init();
	}]);
}).call();