# Why Test-Driven Development?
# Technologies

<img src="https://avatars0.githubusercontent.com/u/139426?v=3&s=400" width="80" height="80"/>
### Angular 2 
<p>
Angular 2 is the next generation version of the infamous development platform for building web application development. Although Angular 2 is still in the works, the platform claims to add a lot of powerful features and upgrades 
such as mobile specific routing and design as well as performance tweaks in speed and performance. Moreover, Angular's 2 has a complete new syntax since it uses ECMAScript 6 (ES6). Its core (directives, views, components) is now written with types and annotations so 
that code is clean and easy-to-read. While Angular 2 plans to include its own integrated module for writings tests, it is still possible to benefit from well-known
TDD frameworks. In fact, with Angular 2's full support of TypeScript, tests can take the advantage of implicit typing and checking without any runtime overhead.
</p>

<img src="https://cdn1.slant.co/11196-thumb.png" width="80" height="80"/>
### Mocha
<p> Mocha is probably one of the most popular test framework for JavaScript. It provides browser support, asynchronous tests, clean coverage reports, and use of any assertion library.</p>

<img src="http://chaijs.com/public/img/chai-logo.png" width="80" height="80"/>
### Chai
<p> Chai builds upon Mocha and adds useful helpers to perform meaningful test assertions to JavaScript.</p>

# Project Structure Overview
```
tdd-angular2/
 │
 ├──build/								* holds src files that will be transpiled into javascript                             
 │   
 ├──src/                    			* holds typescript written angular 2 components
 │   └──app.ts            				* basic project component, uses angular 2's new standard of defining objects which helps encapsulate behavoir logic 
 │     		   
 │   
 ├──test/                   			* holds typescript written unit tests
 |
 ├──node_modules/           			* contains the project's node packages            
 │
 ├──typings/                			* contains the project's typescript definition files                   
 │	   
 ├──tsconfig.json/  					* configuration for typescript definitions
 ├──package.json						* configuration npm build and dependencies
```
## Setup

## About Us

Daniel Kobina
Darrel-Day Guerrero