"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _prueba = require("../controllers/prueba.controller");

var router = (0, _express.Router)();
router.get("/usuarios", _prueba.getUsuarios);
router.post("/usuarios", _prueba.createUsuarios);
var _default = router;
exports["default"] = _default;