/// <reference path="../typings/angular2/angular2.d.ts" />
import { Component, View, NgFor } from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'app' 
})

@View({
  template: `<h1>Test-Driven Development with Angular 2<h1/>
  	    <h2>Article Description </h2>
	    <p>Title: {{ title }}</p> 
	    <p>Authors: {{ authors }}</p>
	    <p>Tags: <i *ng-for="#tag of tags">{{ tag }}, </i></p> 
  	    `,
	    directives: [NgFor]
})

// Component controller
export class ArticleComponent {
  title: string;
  authors: string;
  tags:Array<string>;
  
  constructor() {
  	this.title = "TDD with Angular2";
	  this.authors = "Darrel and Daniel";
	  this.tags = ["TDD", "Angular2"];
  }

  addTag(tag: string){
  	this.tags.push(tag);
  }
}
