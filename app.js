const { render } = require('ejs');
const express = require('express');
const { templateSettings } = require('lodash');
const mongoose = require('mongoose');

const blogRouter =require('./routes/blogroutes');
// express app
const app = express();

// register view engine

app.set('view engine', 'ejs');
const db= 'mongodb+srv://tech:test12@cluster0.98yph.mongodb.net/myfirstdatabase?retryWrites=true&w=majority';

mongoose.connect(db,{ useNewUrlParser: true })
.then((result) =>{ app.listen(3000)}).catch(err => console.log(err));


// static files 
app.use(express.static('public'));
// using middleware 
app.use(express.urlencoded({extended :true}));



// home page 
app.get('/', (req, res) => {
  res.redirect('/blogs');
});
//about page
app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('about', { title: 'About' });
});


//  blog  routes
app.use(blogRouter);


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});