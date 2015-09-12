
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../typings/angular2/angular2.d.ts" />

require('reflect-metadata');
import angular2 = require('angular2/angular2');

/**
 * Module dependencies.
 */
import chai = require('chai');

/**
 * Globals
 */

var expect = chai.expect;

var App = require('../app');

/**
 * Unit tests
 */
describe('User Model Unit Tests:', () => {

    describe('instance', () => {
        it('should create a new app component', (done) => {
            var name = "Alice";
	    var test = new App.MyAppComponent();
            expect(test.name).to.be.equals(name);
            done();
        });

        it('should not be 7', (done) => {
            expect(2+4).to.not.equals(7);
            done();
        });
    });
});