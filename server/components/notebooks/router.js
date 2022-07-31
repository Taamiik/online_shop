const Router = require("express");
const router = new Router();
const controller = require('./controller')

router.get('/', controller.getAll)

module.exports = router;
