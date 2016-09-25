/// <reference path='../_all.ts' />

module models {
    'use strict';

    export class Book {
        constructor(
            public title: string,
            public page: Page,
            public completed: boolean
        ) { }
    }
}