var docModule = angular.module('docModule', []);

docModule.controller('newDoctorCtrl', function () {
	var self = this;

	self.arztVorname = "";
	self.arztNachname = "",
	self.arztFachbereich = [""];

	self.addFachbereich = function () {
		self.arztFachbereich.push('');	
	};

	self.removeFachbereich = function () {
		self.arztFachbereich.pop();
	};

});

docModule.controller('doctorListCtrl', function () {
	var self = this;
	self.test = "Aerzteliste";
});