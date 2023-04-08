const getBook = require("./index")

// test ('show the Empty book List',() =>{

//     //Arrange
//     const booklist =[]

//     // Act
//     const result = getBook(booklist)
//     //Assert
//     expect(result).toEqual([]) 
// })

test('return the incremented list',()=>{
    
    //Arrange
    const booklist =[]
    let numberRead = 0

    // Act
    const result = getBook(booklist, numberRead)
    //Assert
    expect(result).toBe(1)
})