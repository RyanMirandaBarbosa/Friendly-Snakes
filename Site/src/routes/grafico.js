const express = require("express");
const router = express.Router();
const graficoController = require("../controllers/graficoController");

router.post("/infGraficos", function (req, res) {
    graficoController.infGraficos(req, res);
});

module.exports = router;