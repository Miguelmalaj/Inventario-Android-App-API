import { Router } from "express";

import {
    getInventario,
    createInventario
} from "../controllers/inventario.controller";

const router = Router();

router.get("/inventario", getInventario);

router.post("/inventario", createInventario);

export default router;