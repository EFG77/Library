// Book Model

let booksDb= require("../Database/db");


class BookModel{
    constructor(title, author, description){
    this.title = title;
    this.author = author;
    this.description = description;

    }

    save(){
    booksDb.push(this);
    return this;
    }

    static all(){
        return booksDb;
    }

    static update(updateinfo={},){
booksDb = booksDb.map(book=>{
  if(book.title===updateinfo.title){
    return{...book, ...updateinfo,};
  }
  return book;
});

    }

  static delete({name}){
    let deletedBook=null;
    booksDb = booksDb.filter(book=>{
    if (book.title !==title){
      deletedBook=book;
      return true;
    }
    return false;
    });
    return deletedBook;
  }


};

module.exports = BookModel;