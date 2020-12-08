const router = require("express").Router();
const alpacaRoutes = require("./alpaca")

router.use("/alpaca",alpacaRoutes );

module.exports = router