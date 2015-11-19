var patientModule = angular.module('patientModule', []);

patientModule.controller('newPatientCtrl', function () {
	var self = this;
	self.svnr = "0000";
	self.gebdat = "";
});

patientModule.controller('patientListCtrl', function () {
	var self = this;
	self.test = "Patientenliste";
});