// Written BY Muhammad Atique

const  { getBook, numRead ,addBooks} = require('../Testfunction/readingList');

/Given that I visit the site, when I first start, I expect my list to be empty./

test('Return a Empty List', ()=>{
    // Arrange
    const bookList = [];
    //Act
    const list = getBook();
    //Assert
    expect(list).toEqual(bookList)
}) 