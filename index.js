// code written by javeria lodhi

// # First Test: Return the empty String List
function getBook(booklist){
    return []
}

// # Second Test : Incremented List
function getBook(booklist,numberRead){
    let bookName = 'The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, *****'
    booklist.push(bookName)
    if (booklist.includes(bookName)){
        return numberRead+=1
    } else {
    return []
}
}

//Fourth Test: delete the book
function getBook(booklist){
    let bookName = 'The Hobbit'
    let book = booklist.findIndex(item => item.includes(bookName))
      if (book !== -1){
      let result = booklist.splice(book, 1)
      return booklist
    }
} 

//Sixth Test: return a list of books that all have that rating
function getBooksByRatings(booklist){
  
    let books = [];
   
     booklist.forEach(function(book) {
       if (book.includes('****')) {
         books.push(book);
       }
     });
   
     return books;
   }
module.exports = getBook
module.exports = getBooksByRatings