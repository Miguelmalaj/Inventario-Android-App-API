"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _inventario = require("../controllers/inventario.controller");

var router = (0, _express.Router)();
router.get("/inventario", _inventario.getInventario);
router.post("/inventario", _inventario.createInventario); //registrar todos los registros de hoy

router.post("/inventarioagencia", _inventario.crearInventarioAgencia);
var _default = router;
exports["default"] = _default;