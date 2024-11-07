import ProductService from "../services/ProductService.js";

class ProductsControllers {
  productService = new ProductService();

  getAllProducts = async (req, res) => {
    try {
      const products = await this.productService.getAllProductsService();
      res.status(200).send({ success: true, message: products });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  getProductById = (req, res) => {
    const product = this.productService.getProductByIdService();
    res.status(200).send(product);
  };
  createProduct = async (req, res) => {
    try {
      const { name, price } = req.body;
      const product = await this.productService.createProductService({ name, price } );
      // console.log(`🚀 ~ ProductsControllers ~ createProduct= ~ product:`, product);
      debugger
      res.status(200).send({ success: true, message: product });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  updateProduct = (req, res) => {
    const product = this.productService.updateProductService();
    res.status(200).send(product);
  };
  deleteProduct = (req, res) => {
    const product = this.productService.deleteProductService();
    res.status(200).send(product);
  };
}

export default ProductsControllers;
