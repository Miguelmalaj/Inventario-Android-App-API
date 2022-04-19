"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _inventario = _interopRequireDefault(require("./routes/inventario.routes"));

// import prueba from "./routes/prueba.routes";
var app = (0, _express["default"])(); // settings

app.set('port', _config["default"].port); // Middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json()); //Routes
// app.use("/api", prueba);

app.use("/api", _inventario["default"]);
var _default = app;
exports["default"] = _default;