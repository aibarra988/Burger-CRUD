const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const burgerController = require('./controllers/burger_controller');
const viewRoutes = require('./views/viewRoutes');
const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content from the public directory
app.use(express.static('public'));

// Add body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add handlebars
app.engine('.hbs', exphbs({defaultLayout: '../../public/index', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Add controller and view routes
app.use(burgerController);
app.use(viewRoutes);

// Start listening 
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

