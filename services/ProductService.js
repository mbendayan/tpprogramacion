import {Product} from "../models/index.js"

class ProductService {
  getAllProductsService = async () => {
    try {
      const data = await Product.findAll({});
      return data;
    } catch (error) {
      throw error;
    }
  };
  getProductByIdService = async (id) => {
    try {
      const data = await Product.findOne(id)({});
      return data;
    } catch (error) {
      throw error;
    }
  };
  createProductService = async (productData) => {
    try {
      const data = await Product.create(productData);
      return data;
    } catch (error) {
      throw error;
    }
  };
  updateProductService = (id) => {
    return "update product service";
  };
  deleteProductService = (id) => {
    return "delete product service";
  };
}

export default ProductService;