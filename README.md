# Why Test-Driven Development?
<p>
TDD focuses on writing software tests before producing code. It uses automated tools to organize and run tests, and reruns tests frequently as changes are made
to the system during development.
Writing tests first gives you a clearer perspective on the ideal API design.
In few words, writing tests as you add features to your code allows you to obtain reliability and a good code design.
</p>
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

This is how we planned our folder structure. The src/ build/ and test/ folders are the main elements. 
```
tdd-angular2/
 │
 ├──build/										* holds src files that will be transpiled into javascript                             
 │   
 ├──src/                    					* holds typescript written angular 2 components
 │   └──app.ts            						* basic project component, uses angular 2's new standard of defining objects which helps encapsulate behavoir logic 
 │     		   
 │   
 ├──test/                   					* holds typescript written unit tests
 |
 ├──node_modules/           					* contains the project's node packages            
 │
 ├──typings/                					* contains the project's typescript definition files                   
 │	   
 ├──tsconfig.json								* configuration for typescript definitions
 ├──package.json								* configuration npm build and dependencies
```
# Setup

Our setup aims to be quick and simple. Feel free to add any other dependencies you wish. Simply follow either of these two instructions and you will be ready to write tests in no time!

## A- Fast Automatic Setup

#### 1- Clone the repository
```bash
	git clone https://github.com/DanH91/ttd-angular2.git
```

#### 2- Install the dependencies
```bash
	npm install
```

## B- Manual Setup

Ideally, you want to ensure that TypeScript and Mocha are installed as global packages inside your working directory.

#### 1- Install Typescript & Mocha
```bash
	npm install typescript -g
	npm install mocha -g
```
Once that is done, you will need to include your project depencendies.

### 2- Include Dependendies
```bash
	npm install angular2^@2.0.0-alpha.37 --save
	npm install reflect-metadata --save
```

### 3- Include Dev-Dependendies
```bash
	npm install mocha --save-dev
	npm install chai --save-dev
```

With your node packages installed, you can now install your TypeScript definition files.

#### 4- TypeScript dependencies
```bash
	tsd install angular2
	tsd install es6-promise
	tsd install rx
	tsd install rx-lite
	tsd install mocha
	tsd install chai
```
Your TDD project environment is now set. You may now start writing your tests followed by your component (of course)!

# Usage

By the time you reach this step, we assume that you have created tests. If not, we've included simple test cases and components inside our repository (test/app.ts and src/app.ts). Make sure to read Angular 2 and Mocha documentation for more information.

#### Build & Run 

This command should automatically fetch all of your TypeScript source files from your /src folder and transpile them into the /build folder. If you are running on Windows, use the second script command following "npm run build". 
It is important that you include the --emitDecoratorMetadata --experimentalDecorators compiler options.

```bash
	npm run build
	tsc -m commonjs -t es5 --emitDecoratorMetadata --experimentalDecorators src/[filename].ts --outDir build/ 
```

To run, we suggest using a simple HTTP server like http-server to run the application. Of course, you can use anything you want.
```bash  
	npm install http-server -g
```
## Test
To run tests with Mocha use this command. Again, Windows users should go with the second & third commands following "npm run test".
```bash
	npm run test
	tsc -m commonjs -t es5 --emitDecoratorMetadata --experimentalDecorators src/*.ts --outDir build/
	mocha test/**/test
```

## About Us

Daniel Kobina [@DanHK91](https://twitter.com/DanHK91 "Title")
Darrel-Day Guerrero [@ddayyguerrero](https://twitter.com/ddayyguerrero "Title")