// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Create static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Create routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome' });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', (req, res) => {
    const data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    };
    res.render('profile', { person: req.params.name, data });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});