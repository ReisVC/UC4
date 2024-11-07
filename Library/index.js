var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ItemLibrary = /** @class */ (function () {
    function ItemLibrary() {
        this.title = '';
        this.publicationDate = new Date();
    }
    ItemLibrary.prototype.getInfo = function () {
    };
    return ItemLibrary;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Título, autor, ISBN, número de páginas, gênero (ficção, não-ficção, etc.).
        _this.author = '';
        _this.isbn = '';
        _this.numberPages = 0;
        _this.genre = '';
        return _this;
    }
    Book.prototype.getInfo = function () {
        return "Title: ".concat(this.title, " \nBook author: ").concat(this.author, " \nGenre: ").concat(this.genre, " \nNumber Pages: ").concat(this.numberPages);
    };
    return Book;
}(ItemLibrary));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //  editora, ISSN, número de edições, data de publicação.
        _this.publisher = '';
        _this.issn = '';
        _this.editionNumber = 0;
        return _this;
    }
    Magazine.prototype.getInfo = function () {
        return "Title: ".concat(this.title, " \nPublication Date: ").concat(this.publicationDate.getFullYear(), " \nPublisher: ").concat(this.publisher);
    };
    return Magazine;
}(ItemLibrary));
var User = /** @class */ (function () {
    function User() {
        // Nome, matrícula, tipo (aluno, professor, funcionário), lista de itens emprestados.
        this.name = '';
        this.enrolment = 0;
        this.type = '';
        this.itemList = [];
    }
    User.prototype.registerBook = function (item) {
        this.itemList.push(item);
        console.log('Item added succesfully!');
    };
    return User;
}());
var Rent = /** @class */ (function () {
    function Rent() {
        // Data de empréstimo, data de devolução prevista, usuário, item emprestado.
        this.rentDate = new Date();
        this.returnDate = new Date();
        this.user = new User();
        this.itemLent = new Book();
    }
    Rent.prototype.rentItem = function () {
        this.user.itemList.push(this.itemLent);
        console.log("Item rent succesfully;");
    };
    return Rent;
}());
var book = new Book();
book.title = 'Classic Fear';
book.author = 'HP Lovecraft';
book.genre = 'Horror';
book.numberPages = 374;
var magazine = new Magazine();
magazine.title = 'Capricho';
magazine.publicationDate = new Date('2005-08-08');
magazine.publisher = 'O Globo';
var user = new User();
var rent = new Rent();
rent.user = user;
rent.itemLent = book;
rent.rentDate = new Date();
rent.returnDate = new Date('2024-12-07');
console.log(book.getInfo());
console.log(magazine.getInfo());
user.registerBook(magazine);
console.log(user.itemList);
rent.rentItem();
console.log(user.itemList);
