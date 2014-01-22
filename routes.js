(function() {
  module.exports = function(app, options) {
    app.get('/', function(req, res) {
      return res.render("" + options.base + "/");
    });
  };
}).call(this);
