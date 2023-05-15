const BookModel = require("../models/model");


//request handlers/controllers


const createBooksController=(req,res)=>{
    //create a Book
    const{title, author, description}=req.body;
  
    const book= new BookModel(title, author, description);
  
    book.save();
  
    res.send({message:"created successfully", data: book});
  }
  
  
  const viewBooksController=(req,res)=>{
    
      const books= BookModel.all();
      res.send({data:books});
  }
  
  
  const updateBooksController=(req,res)=>{
    //update  Book
    const{title, author, description}=req.body;
  
    const updatedBook = BookModel.update({title, author, description});

  
  
    res.send({message:"update successful", data:updatedBook});
  
  
  }
  
  
  const deleteBooksController=(req,res)=>{
    //delete  Books
    const {title}=req.body;
    const deletedBooks = BookModel.delete({title});
    res.json({message:"book deleted", data:deletedBooks});
  }

  
  module.exports={
    createBooksController,
    viewBooksController,
    updateBooksController,
    deleteBooksController
  };