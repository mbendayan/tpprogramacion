import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Order extends Model {}

Order.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
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
