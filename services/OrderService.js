import {Order, User,Product} from "../models/index.js"

class OrderService {
  getAllOrdersService = async () => {
    try {
      const data = await Order.findAll({
        include:User
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  getOrderByIdService = async (id) => {
    try {
      const data = await Product.findById(id)({
        include:User,
        include:Product
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  createOrderService = async (orderData) => {
    try {
      const data = await Order.create(orderData);
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

export default OrderService;