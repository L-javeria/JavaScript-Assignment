<<<<<<< HEAD
// code written by javeria lodhi
=======

 // Written by Muhammad Atique and Javeria Lodhi..
>>>>>>> ab78579858365f3a17ffcb394a6fc22d8e4a8855

const getBooksByRatings = require("./index")
const getBook = require("./index")

<<<<<<< HEAD
test ('show the Empty book List',() =>{             //1st test case

    //Arrange
    const booklist =[]

    // Act
    const result = getBook(booklist)
    //Assert
    expect(result).toEqual([]) 
})

test('return the incremented list',()=>{           //2nd test case
    
    //Arrange
    const booklist =[]
    let numberRead = 0

    // Act
    const result = getBook(booklist, numberRead)
    //Assert
    expect(result).toBe(1)
})

test ('Delete the book',()=>{                 //4th test case
    // Arrange
    const booklist =['The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, *****',
    'Alices Adventures in Wonderland by Lewis Carroll, 544 pages, 1865, read on May 22, 1992,****']

    // Act
    const result = getBook(booklist)
    //Assert
    expect(result).toBe(booklist)
})
=======
 test ('show the Empty book List',() =>{

     //Arrange
     const booklist =[]
     // Act
     const result = getBook(booklist)
     //Assert
     expect(result).toEqual([]) 
 })

 test('return the incremented list',()=>{
    
     //Arrange
     const booklist =[]
     let numberRead = 0

     // Act
     const result = getBook(booklist, numberRead)
     //Assert
     expect(result).toBe(1)
 })

 test ('Delete the book',()=>{
     // Arrange
     const booklist =['The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, *****',
     'Alices Adventures in Wonderland by Lewis Carroll, 544 pages, 1865, read on May 22, 1992,****']

     // Act
     const result = getBook(booklist)
     //Assert
     expect(result).toBe(booklist)
 })
>>>>>>> ab78579858365f3a17ffcb394a6fc22d8e4a8855

test('Returns books by ratings',()=> {           //6th test case
    
    //Arrange
    let booklist =['The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, ****',
    'Alices Adventures in Wonderland by Lewis Carroll, 544 pages, 1865, read on May 22, 1992, *****',
    'Pshychology of Money By Morgan Housel, 256']

    // Act
    const result = getBooksByRatings(booklist)

    //Assert
<<<<<<< HEAD
    let expected_result = ['The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, ****',
    'Alices Adventures in Wonderland by Lewis Carroll, 544 pages, 1865, read on May 22, 1992, *****']
    
    expect(expected_result).toEqual(result)
})

=======
    let expected_result = ['The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, ****']
    expect(expected_result).toBe(result)
})
>>>>>>> ab78579858365f3a17ffcb394a6fc22d8e4a8855
