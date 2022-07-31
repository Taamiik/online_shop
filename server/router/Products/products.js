const Router = require("express");
const router = new Router();
const theelphonesRouter = require("../../components/theelphones/router")
const televisionsRouter = require("../../components/televisions/router")
const notebooksRouter = require("../../components/notebooks/router")

router.use('/theelphones', theelphonesRouter)
router.use('/tv', televisionsRouter)
router.use('/notebooks', notebooksRouter)

module.exports = router;
