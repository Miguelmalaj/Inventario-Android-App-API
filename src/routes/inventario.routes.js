import { Router } from "express";

import {
    getInventario,
    createInventario,
    getInventarioAgencia
} from "../controllers/inventario.controller";

const router = Router();

router.get("/inventario", getInventario);

router.post("/inventario", createInventario);

router.post("/inventarioagencia", getInventarioAgencia);

export default router;