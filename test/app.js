/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/angular2/angular2.d.ts" />
require('reflect-metadata');
var chai = require('chai');
var expect = chai.expect;
var App = require('../build/app');
describe('Article model Unit Tests:', function () {
    describe('default value', function () {
        it('should create a new article component', function (done) {
            var article = new App.ArticleComponent();
            expect(article.title).to.be.equals("TDD with Angular2");
            done();
        });
    });
    describe('Add tag method', function () {
        it('should add a new tag to the article', function (done) {
            var article = new App.ArticleComponent();
            article.addTag("Unit testing");
            expect(article.tags.length).to.be.equals(3);
            done();
        });
    });
});
