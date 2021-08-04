"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _process$env$PORT = process.env.PORT,
    PORT = _process$env$PORT === void 0 ? 3000 : _process$env$PORT; // const PORT = process.env || 3000;

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
  res.send('just');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion New api',
    colour: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
