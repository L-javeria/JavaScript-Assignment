// console.log('name')

function getBook(booklist,numberRead){
    let bookName = 'The Hobbit by J.R.R. Tolkein, 320 pages, 1937 read on January 1, 2020, *****'
    booklist.push(bookName)
    if (booklist.includes(bookName)){
        return numberRead+=1
    } else {
    return []
}
}

module.exports = getBook