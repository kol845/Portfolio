const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const exphbs = require('express-handlebars');
const { json } = require('body-parser');

const portfolioData = require(path.join(__dirname,'data','portfolio.json'))

const PORT = 3000;
const app = express();

// View engine setup
app.engine('.hbs', exphbs({
    extname:'.hbs'
}));
app.set('view engine', '.hbs');

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Static folder
app.use('/public', express.static(path.join(__dirname,'public')));

app.get('/', (req, res) =>{
    res.render('index', {layout: false});
});
app.get('/portfolio', (req, res) =>{
    res.render('portfolio', {"projects":portfolioData.projects, layout: false});
});
app.get('/creative', (req, res) =>{
    res.render('creative', {layout: false});
});

app.listen(PORT, () => console.log("Server started on port "+PORT+"..."))