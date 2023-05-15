//import express, body-parser
const express= require('express');

const bodyParser= require('body-parser');

const{createBooksController,viewBooksController,updateBooksController,deleteBooksController}= require('./controllers/controller');


//create an instance of the express server
const server=express();

//middlewares
server.use(bodyParser.json());





//routes
//create a book-post method
server.post('/book', createBooksController);

//view book-get method
server.get('/book', viewBooksController);

//update a book-put method
server.put('/book', updateBooksController);

//delete a book-delete method
server.delete('/book', deleteBooksController);




//start server
server.listen(5001, ()=>{console.log('Server is ready')});