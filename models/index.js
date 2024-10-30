import Order from "./Order.js";
import User from "./User.js";

User.hasMany(Order)
Order.belongsTo(User)


export  { Order, User };
