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

//registrar todos los registros de hoy
router.post("/invagencia", crearInventarioAgencia);

//consultar si existen registros del día
router.post("/invexiste", existeInventario);

// router.patch("/invagenciaupd", actualizarInventarioAgencia);
//ESTE METODO ELIMINA LOS REGISTROS DE HOY
// router.delete("/invagenciaupd/:id", actualizarInventarioAgencia);
router.delete("/inveliminar/:id", eliminarInventarioAgencia);

export default router;