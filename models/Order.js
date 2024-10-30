import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Order extends Model {}

Order.init(
  {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"user"
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue:"user"
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue:"user"
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"user"
    },
  },
  {
    sequelize: connection,
    modelName: "Order",
  }
);

export default Order;
