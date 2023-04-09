// Written BY Muhammad Atique

let readingList = []

exports.getBook = ()=>{
    return readingList
}

exports.addBooks= (bookDetails,readDate,rating) =>{
   bookDetails.readDate=readDate;
   bookDetails.rating=rating;
   readingList.push({bookDetails});
}
exports.numRead=() => {
    return readingList.length;
}


exports.addBooks=(bookDetails,bookinfor)=>{
    readingList.push({...bookDetails,bookinfor});  
}