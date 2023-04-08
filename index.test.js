const getBook = require("./index")

test ('show the Empty book List',() =>{

    //Arrange
    const booklist =[]

    // Act
    const result = getBook(booklist)
    //Assert
    expect(result).toEqual([])
})