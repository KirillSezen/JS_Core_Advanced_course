class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayInfo() {
        console.log(`Название: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Год публикации: ${this.publicationYear}`);
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this.price = price;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Цена: ${this.price}`);
    }
}

const ebook = new Ebook("Война и мир", "Лев Толстой", 1867, 9.99);

ebook.displayInfo();