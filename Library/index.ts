class ItemLibrary
{
    title: string = ''
    publicationDate: Date = new Date()

    getInfo(): void {
        
    }
}

class Book extends ItemLibrary {
// Título, autor, ISBN, número de páginas, gênero (ficção, não-ficção, etc.).
    author: string = ''
    isbn: string = ''
    numberPages: number = 0
    genre: string =''

    getInfo():string {
        return `Title: ${this.title} \nBook author: ${this.author} \nGenre: ${this.genre} \nNumber Pages: ${this.numberPages}`
    }
}

class Magazine extends ItemLibrary {
//  editora, ISSN, número de edições, data de publicação.
    publisher: string = ''
    issn: string = ''
    editionNumber: number = 0

    getInfo(): string {
        return `Title: ${this.title} \nPublication Date: ${this.publicationDate.getFullYear()} \nPublisher: ${this.publisher}`
    }
}

class User {
   // Nome, matrícula, tipo (aluno, professor, funcionário), lista de itens emprestados.
   name: string = '';
   enrolment: number = 0
   type: string = '';
   itemList: Array<Book|Magazine> = [];

   registerBook(item:Book|Magazine) {
    this.itemList.push(item);
    console.log('Item added succesfully!')
   }

}

class Rent {
   // Data de empréstimo, data de devolução prevista, usuário, item emprestado.
    rentDate: Date = new Date()
    returnDate: Date = new Date()
    user: User = new User()
    itemLent: Book|Magazine = new Book()

    rentItem() {
        this.user.itemList.push(this.itemLent);
        console.log(`Item rent succesfully;`)
    }
}

let book: Book = new Book()
book.title = 'Classic Fear'
book.author = 'HP Lovecraft'
book.genre = 'Horror'
book.numberPages = 374

let magazine: Magazine = new Magazine()
magazine.title = 'Capricho'
magazine.publicationDate = new Date('2005-08-08')
magazine.publisher = 'O Globo'

let user: User = new User()

let rent: Rent = new Rent()
rent.user = user
rent.itemLent = book
rent.rentDate = new Date()
rent.returnDate = new Date('2024-12-07')

console.log(book.getInfo())
console.log(magazine.getInfo())
user.registerBook(magazine)
console.log(user.itemList)
rent.rentItem()
console.log(user.itemList)