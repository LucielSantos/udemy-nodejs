const pdf = require('html-pdf')

class PDFWriter{
  writePDF(filename, html){
    pdf.create(html, {}).toFile(filename, (err) => {});
  }
}

module.exports = PDFWriter;