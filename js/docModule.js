var docModule = angular.module('docModule', []);

docModule.controller('newDoctorCtrl', function () {
	var self = this;
	self.arzt = {};

	self.arzt.vorname = "";
	self.arzt.nachname = "",
	self.arzt.fachbereich = [""];

	self.addFachbereich = function () {
		self.arzt.fachbereich.push('');	
	};

	self.removeFachbereich = function () {
		self.arzt.fachbereich.pop();
	};

	self.submitNewDoctor = function () {
		//Not yet implemented, just testcontent

		self.output = JSON.stringify(self.arzt);
		console.log(self.output);
	};

});

docModule.controller('doctorListCtrl', function () {
	var self = this;
	self.test = "Aerzteliste";

	self.docList = [
		{
			'arztVorname' : 'Dummy',
			'arztNachname' : 'Doc1',
			'arztFachbereich' : ['Blutiger Anfänger']
		},
		{
			'arztVorname' : 'Dummy',
			'arztNachname' : 'Doc2',
			'arztFachbereich' : ['Onkologe']
		},
		{
			'arztVorname' : 'Dummy',
			'arztNachname' : 'Doc3',
			'arztFachbereich' : ['-ologe','Internist']
		},
	];

});