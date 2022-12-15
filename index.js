const express = require('express');
const app = express();
const portNumber = 1234;
app.listen(portNumber, () => {
    console.log('Priyanka')
});
app.get('/',(request,response) => {
    console.log('Welcome')
    response.send("Welcome to priyanka's project");
});
app.get('/home',(request,response) => {
    console.log('home')
    response.send('Welcome to the Home Page');
});
app.get('/about',(request,response) => {
    console.log('about')
    response.send('Welcome to the about Page');
});

app.get('/feedback',(request,response) => {
    console.log('feedback')
    response.send('Give a feedback');
});