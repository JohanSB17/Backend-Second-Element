//path /api/v1/producto

import { Router } from "express";
import {
  crearProducto,
  eliminarProducto,
  getProductos,
  getUnProducto,
  updateProducto,
} from "../controllers/producto.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { validateJWT } from "../middlewares/validate-jwt";
import multer from "../libs/multer";
const router = Router();
router.post(
  "/",
  validateJWT,
  multer.single('imagenPath'), // Agrega Multer a tu ruta,
  [
    check("nombre", "El nombre del producto es obligatorio").not().isEmpty(),
    check("sku", "El SKU del producto es obligatorio").not().isEmpty(),
    check("precio", "El precio del producto es obligatorio").not().isEmpty(),
    validateFields,
  ],
  crearProducto
);
router.get("/", getProductos);
router.get("/:id", getUnProducto);
router.put("/:id", updateProducto);
router.delete("/:id", eliminarProducto);

export default router;
