const book ={
    title: "book title",
    author:"book author",
    publisher:{
        name: "Publisher Name"
    }
}
const{title,author}=book;

const {name:publisherName='Self-Published'}=book.publisher;

console.log(publisherName);

console.log("-------");

const menu=['Coffee (hot)' , '$2.00' , '$2.50' , '$2.75' ];

const [medium,,price,]=menu

console.log(`A medium ${medium} costs ${price}`);