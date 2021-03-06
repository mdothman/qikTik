const router = require("express").Router();
const stocksController = require('../../controllers/alpacaController');

router.route("/")
.get(stocksController.activeAssets)

router.route("/:symbol")
.get(stocksController.particularAssets)

router.route('/bars/:symbol')
.get(stocksController.barset)


module.exports = router