/// <reference path='../_all.ts' />
var models;
(function (models) {
    'use strict';
    var Page = (function () {
        function Page(html, imgSrc, completed) {
            this.html = html;
            this.imgSrc = imgSrc;
            this.completed = completed;
        }
        return Page;
    }());
    models.Page = Page;
})(models || (models = {}));
