const Router = require("express");
const router = new Router();
const productRouter = require("./Products/products");

router.use("/products", productRouter);

module.exports = router;
