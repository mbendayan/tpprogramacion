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
      return await Product.findByPk(parseInt(id)).then(data => {return data});
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
    
  updateProductService = async(productData) => {
      try {
        await User.update(productData,
        { where: { id: productData.id } })
        .then(data => {return data});
        return productData;
      } catch (error) {
        throw error;
      }
    };
    
  deleteProductService = async (id2) => {
    try {
      await Product.destroy({
        where: { id:id2},
      })
    } catch (error) {
      throw error;
    }
  };
}

export default ProductService;