var less = require('less');

module.exports = function(app) {
  app.viewExtensions.push('.less');
  app.compilers['.less'] = lessCompiler;
};

function lessCompiler(file, filename, options) {
  var parser = new less.Parser({
    paths: [path.dirname(filename)]
    , filename: filename
    , syncImport: true
  });
  var out = {};
  parser.parse(file, function(err, tree) {
    if (err) throw err;
    out.css = tree.toCSS(options);
  });
  out.files = Object.keys(parser.imports.files).map(function(path) {
    return path;
  });
  out.files.push(filename);
  return out;
}