import { Router } from "express";
import userRoutes from "./userRoutes.js";
import orderRoutes from "./orderRoutes.js";
import { logger } from "../midlewares/logger.js";

const routes = Router();

routes.use("/user", userRoutes); 
routes.use("/order",orderRoutes);


export default routes;
