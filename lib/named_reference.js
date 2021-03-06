// Generated by CoffeeScript 1.12.7

/*
PDFNamedReference - representation of a named reference, e.g. "(file1.txt) 11 0 R"
 */

(function() {
  var PDFNamedReference;

  PDFNamedReference = (function() {
    function PDFNamedReference(reference, name) {
      this.reference = reference;
      this.name = name;
    }

    PDFNamedReference.prototype.toString = function() {
      return "(" + this.name + ") " + this.reference;
    };

    return PDFNamedReference;

  })();

  module.exports = PDFNamedReference;

}).call(this);
