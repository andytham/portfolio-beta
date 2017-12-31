//const Portfolio = require('../models/portfolio.js');
const portfolioController = {};
portfolioController.index = (req,res) => {
  res.render('portfolio.ejs')
}

module.exports = portfolioController;
