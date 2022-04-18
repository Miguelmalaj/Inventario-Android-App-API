import { Router } from "express";

import {
    getInventario,
    createInventario,
    crearInventarioAgencia
} from "../controllers/inventario.controller";

const router = Router();

router.get("/inventario", getInventario);

router.post("/inventario", createInventario);

//registrar todos los registros de hoy
router.post("/inventarioagencia", crearInventarioAgencia);

export default router;