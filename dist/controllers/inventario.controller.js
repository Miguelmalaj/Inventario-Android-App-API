"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInventario = exports.createInventario = exports.crearInventarioAgencia = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getInventario = /*#__PURE__*/function () {
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
            return pool.request().query(_database.querys.getInventario);

          case 6:
            result = _context.sent;
            res.json({
              inventario: result.recordset
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

  return function getInventario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getInventario = getInventario;

var crearInventarioAgencia = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var mensaje, estado, pool, _iterator, _step, registro;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //destructuring
            // const { Empresa, Sucursal, Id_usuario } = req.body;
            // console.log(req.body);

            /* for(const registro of req.body){
                console.log(registro.Nombre_ubicacion);
              } */
            // res.json({mensaje:"done"});
            mensaje = "La sincronización se ha hecho correctamente";
            estado = 1;

            if (req.body.length === 0) {
              mensaje = "No existen registros por sincronizar.";
              estado = 2;
            }

            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            // const result = await pool.request()
            _iterator = _createForOfIteratorHelper(req.body);
            _context2.prev = 8;

            _iterator.s();

          case 10:
            if ((_step = _iterator.n()).done) {
              _context2.next = 16;
              break;
            }

            registro = _step.value;
            _context2.next = 14;
            return pool.request().input("VIN", _database.sql.VarChar, registro.VIN).input("Id_fecha", _database.sql.Date, registro.Id_fecha).input("Nombre_ubicacion", _database.sql.VarChar, registro.Nombre_ubicacion).input("Empresa", _database.sql.Int, registro.Empresa).input("Sucursal", _database.sql.Int, registro.Sucursal).input("Id_usuario", _database.sql.Int, registro.Id_usuario).query(_database.querys.addInventario);

          case 14:
            _context2.next = 10;
            break;

          case 16:
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](8);

            _iterator.e(_context2.t0);

          case 21:
            _context2.prev = 21;

            _iterator.f();

            return _context2.finish(21);

          case 24:
            res.json({
              mensaje: mensaje,
              estado: estado
            });
            console.log({
              mensaje: "registro exitoso"
            });
            _context2.next = 33;
            break;

          case 28:
            _context2.prev = 28;
            _context2.t1 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t1.message);
            console.log(_context2.t1.message);

          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 28], [8, 18, 21, 24]]);
  }));

  return function crearInventarioAgencia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.crearInventarioAgencia = crearInventarioAgencia;

var createInventario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, VIN, Id_fecha, Nombre_ubicacion, Empresa, Sucursal, Id_usuario, pool;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //destructuring variables en body

            /* 
            VIN - varchar
            Id_fecha - date
            Nombre_ubicacion - varchar
            Empresa - int
            Sucursal - int
            Id_usuario - int
            */
            _req$body = req.body, VIN = _req$body.VIN, Id_fecha = _req$body.Id_fecha, Nombre_ubicacion = _req$body.Nombre_ubicacion, Empresa = _req$body.Empresa, Sucursal = _req$body.Sucursal, Id_usuario = _req$body.Id_usuario;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input("VIN", _database.sql.VarChar, VIN).input("Id_fecha", _database.sql.Date, Id_fecha).input("Nombre_ubicacion", _database.sql.VarChar, Nombre_ubicacion).input("Empresa", _database.sql.Int, Empresa).input("Sucursal", _database.sql.Int, Sucursal).input("Id_usuario", _database.sql.Int, Id_usuario).query(_database.querys.addInventario);

          case 7:
            //RESPUESTA DE RETORNO
            res.json({
              inventario: {
                VIN: VIN
              }
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500);
            res.send(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function createInventario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //TODO
//2.- QUERYS
//1.- CAMPOS DE TABLA PARA REALIZAR EL REGISTRO 


exports.createInventario = createInventario;