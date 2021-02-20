const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');


app.get('/norman_borlaug', (req, res) => {
    res.render('tributeWebsite');
})

app.listen(3000, () => {
    console.log("Server started at 3000");
}) //comment

    //comment form forked repo by user dhruvTest36