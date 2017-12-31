const express = require('express');
const portfolioRouter = express.Router();
const portfolioController = require('../controllers/portfolio-controller.js')

portfolioRouter.get('/', portfolioController.index);


module.exports = portfolioRouter;
