import { Router } from "express";
import { ProductsControllers } from "@/controllers/products.controller";

const productsRoutes = Router();
const productsControllers = new ProductsControllers();

productsRoutes.get("/", productsControllers.index);
productsRoutes.post("/", productsControllers.create);

export { productsRoutes };
