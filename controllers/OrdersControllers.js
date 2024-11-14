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
    this.orderService.getOrderByIdService(req.params.id)
    .then((order) => {res.status(200).send(order)});    
  };
  createOrder = async (req, res) => {
    try {
      const { UserId, ProductId, amount } = req.body;
      const order = await this.orderService.createOrderService({ UserId, ProductId, amount });
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
    const order = this.orderService.updateOrderService(req.params.id);
    res.status(200).send(order);
  };
  deleteOrder = (req, res) => {
    const order = this.orderService.deleteOrderService(req.params.id);
    res.status(200).send(order);
  };
}

export default OrdersControllers;
