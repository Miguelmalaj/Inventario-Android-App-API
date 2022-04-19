"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsuarios = exports.createUsuarios = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getUsuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.querys.prueba);

          case 6:
            result = _context.sent;
            res.json({
              usuarios: result.recordset
            });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsuarios = getUsuarios;

var createUsuarios = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, nombre_usuario, clave, empresa, sucursal, tipo_usuario, responsable, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //la validacion para saber si ya existe ese usuario se hará dessde aqui
            _req$body = req.body, nombre_usuario = _req$body.nombre_usuario, clave = _req$body.clave, empresa = _req$body.empresa, sucursal = _req$body.sucursal, tipo_usuario = _req$body.tipo_usuario, responsable = _req$body.responsable;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input("nombre_usuario", _database.sql.VarChar, nombre_usuario).input("clave", _database.sql.VarChar, clave) // .input("empresa", sql.Int, empresa)
            // .input("sucursal", sql.Int, sucursal)
            .input("tipo_usuario", _database.sql.Int, tipo_usuario) // .input("responsable", sql.Int, responsable)
            .query(_database.querys.addUsuario);

          case 7:
            res.json({
              usuarios: {
                nombre_usuario: nombre_usuario,
                clave: clave
              }
            });
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            res.status(500);
            res.send(_context2.t0.message);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function createUsuarios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUsuarios = createUsuarios;