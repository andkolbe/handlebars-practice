// Loads the express module
const express = require('express');

// Creates our express server
const app = express();
const port = 3000;

// Loads the handlebars engine
const handlebars = require('express-handlebars');

// Sets our app to use the handlebars engine
app.set('view engine', 'hbs'); // shorten hbs from handlebars

// Sets handlebars configurations 
app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`, // layoutsDir points to the folder that contains the necessary files
    extname: 'hbs', // can shorten 'handlebars' to 'hbs',
    defaultLayout: 'index', // defaultLayout: index points to the index.handlebars
    partialsDir: `${__dirname}/views/partials`
}))

// Serves static files. We need it to be able to import a css file
app.use(express.static('public'));

// Made up api to practice using dynamic values
const fakeApi = () => {
    return [
        {
            name: 'James Harden',
            sport: 'basketball'
        },
        {
            name: 'Deshaun Watson',
            sport: 'football'
        },
        {
            name: 'George Springer',
            sport: 'baseball'
        }
    ]
}

// Sets a basic route
app.get('/', (req, res) => {
    res.render('main', {layout: 'index', proPlayers: fakeApi()}) // we can pass as many variables as we want to the render function
    // main points to the main.handlebars
    // if you switch the layout to planB it will render that instead
    // we can pass as many variables as we want to the render function
})

// Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`))