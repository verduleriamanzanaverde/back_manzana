import express from "express"
import { createControllerProducto, getControllerProducto, updateControllerProducto, getOneControllerProducto } from "../controllers/controllerProductos.js"

const routerProducto = express.Router()

routerProducto.get("/",getControllerProducto)
routerProducto.get("/:id",getOneControllerProducto)
routerProducto.post("/",createControllerProducto)
routerProducto.put("/:id",updateControllerProducto)




export default routerProducto