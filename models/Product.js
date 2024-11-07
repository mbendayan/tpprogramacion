import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"NOMBREPRODUCTO"
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0
    },
  },
  {
    sequelize: connection,
    modelName: "Product", 
  }
);

export default Product;
