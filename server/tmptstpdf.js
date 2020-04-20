// file tmptstpdf

// file tstfrmpdf.js   
// test the library frmPdf
//This is a fix for the ReferenceError: window is not defined
//
global.window = {document: {createElementNS: () => {return {}} }};
global.navigator = {};
global.btoa = () => {};

var fs = require('fs');
//var jsPDF = require('jspdf');
const jsPDF = require("jspdf");
// const frmPdf = require('./frmPdf')
doc = new jsPDF()

doc.setFontSize(40);
doc.text(35, 25, 'PDF with jsPDF!');
var data = doc.output();

fs.writeFileSync('./document.pdf', data);

delete global.window;
delete global.navigator;
delete global.btoa;
//doc.text("temporary")
//doc.save("tmp.pdf")
//frmPdf.gen_doc();
//frmPdf.rndr_lns()
//frmPdf.sav_doc("tmpfrm.pdf")
