/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/angular2/angular2.d.ts" />

import 'reflect-metadata';
import 'angular2/angular2';

import { expect } from 'chai';

import { ArticleComponent } from  '../src/app';

describe('Article model Unit Tests:', () => {

    describe('default value', () => {
        it('should create a new article component', (done) => {
            var article = new ArticleComponent();
            expect(article.title).to.be.equals("TDD with Angular2");
            done();
        });
    });

    describe('Add tag method', () => {
        it('should add a new tag to the article', (done) => {
            var article = new ArticleComponent();
            article.addTag("Unit testing");
            expect(article.tags.length).to.be.equals(3);
            done();
        });
    });
});