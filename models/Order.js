import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Order extends Model {}

Order.init(
  {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0
    },
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0
    },
  },
  {
    sequelize: connection,
    modelName: "Order",
  }
);

export default Order;
