PatientReports = new Meteor.Collection("patient_reports");
PatientReports.attachSchema(Schemas.patientReports);

SignatureReports = new Meteor.Collection("signature_reports");
SignatureReports.attachSchema(Schemas.signatureReports);

PathwayReports = new Meteor.Collection("pathway_reports");
PathwayReports.attachSchema(Schemas.pathwayReports);

GeneReports = new Meteor.Collection("gene_reports");
GeneReports.attachSchema(Schemas.geneReports);

// Patients = new Meteor.Collection("patients");
// Patients.attachSchema(Schemas.patients);

// Samples = new Meteor.Collection("samples");
// Samples.attachSchema(Schemas.samples);
