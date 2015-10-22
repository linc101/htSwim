'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the publicApp
 */
angular.module('hts')
  .controller('signInCtrl',['$scope','Upload',function ($scope,Upload) {
  	$scope.files = [];
  	$scope.upload = function(){
  		// alert('ddfdf');
  		 Upload.upload({
		                url: 'member/upload',
		                fields: {'version': $scope.version},
		                file: $scope.files
		            }).progress(function (evt) {
		               
		            }).success(function (data, status, headers, config) {
                    newLoad.upload = false;
                    $scope.isUploading = false;
                    $scope.files = null;
                    $scope.version = '';
                    $scope.toggle();
		            }).
		            error(function(){
                  $scope.warList.pop();
                  $scope.isUploading = false;
		              alert('上传失败');
		            });
  				};
  }]
  );
