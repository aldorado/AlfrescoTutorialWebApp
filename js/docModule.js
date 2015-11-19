var docModule = angular.module('docModule', []);

docModule.controller('newDoctorCtrl', function () {
	var self = this;
	self.test = "Neuer Arzt";
});

docModule.controller('doctorListCtrl', function () {
	var self = this;
	self.test = "Aerzteliste";
});