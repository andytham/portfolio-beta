const express = require('express');
const app = express();

//static
app.use(express.static('public'));


const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



const PORT = process.env.PORT || 3000;
const portfolioRouter = require('./routes/portfolio-routes.js');
app.use('/portfolio', portfolioRouter);

app.get('/', (req,res) => {
  res.render('index.ejs',{});
});

app.get('*', (req,res) => {
  res.send('404 please pay $20 to access');
})

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT);
})
