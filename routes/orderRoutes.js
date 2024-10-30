import { Router } from "express";
import OrderController from "../controllers/OrdersControllers.js";

const orderController = new OrderController();

const userRoutes = Router();

userRoutes.get("/", orderController.getAllUsers);
userRoutes.get("/:id", orderController.getUserById);
userRoutes.post("/", orderController.createUser);
userRoutes.put("/:id", orderController.updateUser);
userRoutes.delete("/:id", orderController.deleteUser);

export default userRoutes;
