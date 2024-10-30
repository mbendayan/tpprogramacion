import {Order, User} from "../models/index.js"

class OrderService {
  getAllOrdersService = async () => {
    try {
      const data = await Order.findAll({
        attributes:["product"],
        include:User
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  getOrderByIdService = (id) => {
    return "get order by id service";
  };
  createOrderService = async (orderData) => {
    try {
      const data = await Order.create(order);
      return data;
    } catch (error) {
      throw error;
    }
  };
  updateOrderService = (id) => {
    return "update order service";
  };
  deleteOrderService = (id) => {
    return "delete order service";
  };
}

export default Order;
