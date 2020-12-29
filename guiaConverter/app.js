const ProcessorClass = require('./Processor');
const ReaderClass = require('./Reader');
const TableClass = require('./Table');
const HtmlParserClass = require('./HtmlParser');
const WriterClass = require('./Writer');
const PDFWriterClass = require('./PDFWriter');

var Reader = new ReaderClass();
var Processor = new ProcessorClass();
var HtmlParser = new HtmlParserClass();
var Writer = new WriterClass();
var PDFWriter = new PDFWriterClass();

async function main(){
  var dados = await Reader.read('./users.csv');

  var dadosProcessados = Processor.process(dados);

  var usuarios = new TableClass(dadosProcessados);

  var html = await HtmlParser.parse(usuarios);

  Writer.write(Date.now() + '.html', html);
  
  PDFWriter.writePDF(Date.now() + '.pdf', html);  
}

main();
