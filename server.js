const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Set Template
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set Static Folder
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/aos/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname));

// Routes
app.use('/', require('./routes/basicRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
