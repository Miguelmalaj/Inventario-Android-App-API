import { Router } from "express";
import {
    getUsuarios,
    createUsuarios
} from "../controllers/prueba.controller";

const router = Router();

router.get("/usuarios", getUsuarios);

router.post("/usuarios", createUsuarios);

export default router;