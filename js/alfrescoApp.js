var alfrescoApp = angular.module('alfrescoApp', ['ngRoute']);

alfrescoApp.config( function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller: 'mainCtrl',
			controllerAs : 'mc'
		})
		.when('/newpatient', {
			templateUrl : 'pages/newpatient.html',
			controller : 'newPatientCtrl',
			controllerAs : 'npc'
		})
		.when('/patientlist', {
			templateUrl : 'pages/patientlist.html',
			controller : 'patientListCtrl',
			controllerAs : 'plc'
		});

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
});

alfrescoApp.controller('mainCtrl', function () {
	var self = this;
	self.test = "AlfrescoApp, up and running!";
});

alfrescoApp.controller('newPatientCtrl', function () {
	var self = this;
	self.test = "Neuer Patient!";
	self.svnr = "0000";
	self.gebdat = "";
});

alfrescoApp.controller('patientListCtrl', function () {
	var self = this;
	self.test = "Patientenliste";
});