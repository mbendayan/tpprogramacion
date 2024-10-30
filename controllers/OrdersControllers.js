import OrderService from "../services/OrderService.js";

class OrdersControllers {
  orderService = new OrderService();

  getAllOrders = async (req, res) => {
    try {
      const orders = await this.orderService.getAllOrdersService();
      res.status(200).send({ success: true, message: orders });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  getOrderById = (req, res) => {
    const order = this.orderService.getOrderByIdService();
    res.status(200).send(order);
  };
  createOrder = async (req, res) => {
    try {
      const { UserId, amount, product, price } = req.body;
      const order = await this.orderService.createOrderService({ UserId, amount, product, price });
      // console.log(`🚀 ~ OrdersControllers ~ createOrder= ~ order:`, order);
      res.status(200).send({ success: true, message: order });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  updateOrder = (req, res) => {
    const order = this.orderService.updateOrderService();
    res.status(200).send(order);
  };
  deleteOrder = (req, res) => {
    const order = this.orderService.deleteOrderService();
    res.status(200).send(order);
  };
}

export default OrdersControllers;
