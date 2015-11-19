var patientModule = angular.module('patientModule', []);

patientModule.controller('newPatientCtrl', function () {
	var self = this;
	self.versicherungen = ['WGKK','BVA','PVA','SVA'];
	self.geschlechter = ['Männlich','Weiblich'];
	self.blutgruppen = ['A','B','0','AB'];
	self.rhesusfaktoren = ['Positiv', 'Negativ'];
	
	self.patient = {};

	self.submitNewPatient = function () {
		self.output = JSON.stringify(self.patient);
		console.log(JSON.stringify(self.patient));
	};
});

patientModule.controller('patientListCtrl', function () {
	var self = this;
	self.test = "Patientenliste";

	self.patientList = [
		{
			"svnr":"1234",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"BVA",
			"geschlecht":"Männlich",
			"vorname":"Anuar",
			"nachname":"Suarez",
			"strasse":"Beheimgasse 58/10",
			"ort":"Wien",
			"blutgruppe":"B",
			"rhesusfaktor":"Positiv"
		},
		{
			"svnr":"1234",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"BVA",
			"geschlecht":"Männlich",
			"vorname":"Anuar",
			"nachname":"Suarez",
			"strasse":"Beheimgasse 58/10",
			"ort":"Wien",
			"blutgruppe":"B",
			"rhesusfaktor":"Positiv"
		},
		{
			"svnr":"1234",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"BVA",
			"geschlecht":"Männlich",
			"vorname":"Anuar",
			"nachname":"Suarez",
			"strasse":"Beheimgasse 58/10",
			"ort":"Wien",
			"blutgruppe":"B",
			"rhesusfaktor":"Positiv"
		},
		{
			"svnr":"1234",
			"gebdat":"1985-12-13T23:00:00.000Z",
			"versicherung":"BVA",
			"geschlecht":"Männlich",
			"vorname":"Anuar",
			"nachname":"Suarez",
			"strasse":"Beheimgasse 58/10",
			"ort":"Wien",
			"blutgruppe":"B",
			"rhesusfaktor":"Positiv"
		}
	];
});