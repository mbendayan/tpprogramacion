import { Router } from "express";
import OrderController from "../controllers/OrdersControllers.js";

const orderController = new OrderController();

const orderRoutes = Router();

orderRoutes.get("/", orderController.getAllOrders);
orderRoutes.get("/:id", orderController.getOrderById);
orderRoutes.post("/", orderController.createOrder);
orderRoutes.put("/:id", orderController.updateOrder);
orderRoutes.delete("/:id", orderController.deleteOrder);

export default orderRoutes;
