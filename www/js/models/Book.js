/// <reference path='../_all.ts' />
var models;
(function (models) {
    'use strict';
    var Book = (function () {
        function Book(title, page, completed) {
            this.title = title;
            this.page = page;
            this.completed = completed;
        }
        return Book;
    }());
    models.Book = Book;
})(models || (models = {}));
