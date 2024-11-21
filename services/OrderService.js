import {Order, User,Product} from "../models/index.js"

class OrderService {
  getAllOrdersService = async () => {
    try {
      const data = await Order.findAll({
      });
      return data;
    } catch (error) {
      throw error;
    }
  };
  getOrderByIdService = async (id) => {
    try {
      return await Order.findByPk(parseInt(id)).then(data => {return data});
    } catch (error) {
      throw error;
    }
  };
  
  createOrderService = async (orderData) => {
    try {
      if(orderData.amount <= 0){
        throw new Error('Invalid amount');
      }
      if(orderData.UserId <= 0){
        throw new Error('Invalid userId');
      }
      if(orderData.ProductId <= 0){
        throw new Error('Invalid productId');
      }
      const data = await Order.create(orderData);
      return data;
    } catch (error) {
      throw error;
    }
  };

  updateOrderService = async(orderData) => {
    try {
      if(orderData.amount <= 0){
        throw new Error('Invalid amount');
      }
      if(orderData.UserId <= 0){
        throw new Error('Invalid userId');
      }
      if(orderData.ProductId <= 0){
        throw new Error('Invalid productId');
      }
      await User.update(orderData,
      { where: { id: orderData.id } })
      .then(data => {return data});
      return orderData;
    } catch (error) {
      throw error;
    }
  };

  deleteOrderService = async (id2) => {
    try {
      await Order.destroy({
        where: { id:id2},
      })
    } catch (error) {
      throw error;
    }
  };
}

export default OrderService;