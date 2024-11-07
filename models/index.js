import Order from "./Order.js";
import User from "./User.js";
import Product from "./Product.js";

User.hasMany(Order)
Product.hasMany(Order)
Order.belongsTo(User)


export  { Order, User,Product };
