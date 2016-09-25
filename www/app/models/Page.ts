/// <reference path='../_all.ts' />

module models {
    'use strict';

    export class Page {
        constructor(
            public html: string,
            public imgSrc: string,
            public completed: boolean
        ) { }
    }
}