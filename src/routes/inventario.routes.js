import { Router } from "express";

import {
    getInventario,
    createInventario,
    crearInventarioAgencia,
    existeInventario,
    eliminarInventarioAgencia
} from "../controllers/inventario.controller";

const router = Router();

router.get("/inventario", getInventario);
router.post("/inventario", createInventario);

//SÓLO LOS 3 ENDPOINTS QUE ESTÁN ABAJO DE ESTA LÍNEA SE ESTÁN UTILIZANDO ACTUALMENTE EN LA APP ANDROID INVENTARIOS.
router.post("/invagencia", crearInventarioAgencia);

router.post("/invexiste", existeInventario);

router.delete("/inveliminar/:id", eliminarInventarioAgencia);

export default router;