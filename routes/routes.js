import { Router } from "express";
import userRoutes from "./userRoutes.js";
import orderRoutes from "./orderRoutes.js";
import { logger } from "../midlewares/logger.js";
import productRoutes from "./productRoutes.js";

const routes = Router();

routes.use("/user", userRoutes); 
routes.use("/order",orderRoutes);
routes.use("/product",productRoutes);

export default routes;
