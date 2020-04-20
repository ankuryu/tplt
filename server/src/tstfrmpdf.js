// file tstfrmpdf.js   
// test the library frmPdf

//const jsPdf = require("jspdf");
// const frmPdf = require('./frmPdf')
doc = new jsPDF()
doc.text("temporary")
doc.save("tmp.pdf")
//frmPdf.gen_doc();
//frmPdf.rndr_lns()
//frmPdf.sav_doc("tmpfrm.pdf")
