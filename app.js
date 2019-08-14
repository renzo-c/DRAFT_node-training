const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var exphbs = require('express-handlebars');
const app = express();

// Registering templating callback function as extension (.handlebars)
// Pug was kind of registered by default, that is why this step was obviated
app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');
// app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render('404', { pageTitle: 'Page Not Found', layout: 'main-layout' });
});

app.listen(3000);
