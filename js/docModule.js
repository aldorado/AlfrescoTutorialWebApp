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

	self.submitNewDoctor = function () {
		//Not yet implemented, just testcontent

		newDoctor = {
			'arztVorname' : self.arztVorname,
			'arztNachname' : self.arztNachname,
			'arztFachbereich' : self.arztFachbereich
		};

		console.log(JSON.stringify(newDoctor));
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