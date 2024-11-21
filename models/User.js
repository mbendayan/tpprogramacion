import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {}

User.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.salt = salt;
  // console.log(`🚀 ~ User.beforeCreate ~ salt:`, salt);
  const hash = await bcrypt.hash(user.pass, salt);
  // console.log(`🚀 ~ User.beforeCreate ~ hash:`, hash)
  user.pass = hash;
});

export default User;
