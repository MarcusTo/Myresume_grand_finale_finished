const express = require('express');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); //get data from request body
app.use(express.static('public'));
app.use(express.static('img'));


app.use(mainRoutes);


port = 3000;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
});