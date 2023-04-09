const getBook = require("./index")

// test ('show the Empty book List',() =>{

//     //Arrange
//     const booklist =[]

//     // Act
//     const result = getBook(booklist)
//     //Assert
//     expect(result).toEqual([]) 
// })

// test('return the incremented list',()=>{
    
//     //Arrange
//     const booklist =[]
//     let numberRead = 0

//     // Act
//     const result = getBook(booklist, numberRead)
//     //Assert
//     expect(result).toBe(1)
// })

test ('Delete the book',()=>{
    // Arrange
    const booklist =['The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, *****',
    'Alices Adventures in Wonderland by Lewis Carroll, 544 pages, 1865, read on May 22, 1992,****']

    // Act
    const result = getBook(booklist)
    //Assert
    expect(result).toBe(booklist)
})