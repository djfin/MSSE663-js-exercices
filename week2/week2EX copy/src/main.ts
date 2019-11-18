import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { prototype } from 'jasmine';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // #1 Take an array of numbers and make them strings
function stringItUp(arr) {
	return arr.map( x => x = x.toString());
}

console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]

// #2 Make an array of strings of the names
function namesOnly(arr) {
	return arr.map( x => x = x.name);
}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {
  var arr1 = arr.filter(x => x = x.age>=80);
  return arr1.map(x => x = x.age);
}
console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: [80, 100]

var monkey1 = {
  name: "Chimp",
  diet: "fruit",
  age: 8,
  out: function (){
    return ("Name: " + this.name + ", Diet: " + this.diet + ", Age: " + this.age);
  },
  birthday: function(){
    this.age++;
    return("Happy birthday! This monkey is now " + this.age);
  }
}
console.log(monkey1.out());
console.log(monkey1.birthday());

class monkey{
  name: string
  diet: string
  age: number

  constructor(name, diet, age){
    this.name = name;
    this.age = age;
    this.diet=diet;
  }

  out(){
    return ("Name: " + this.name + ", Diet: " + this.diet + ", Age: " + this.age);
  }
  birthday(){
    this.age++;
    return("Happy birthday! This monkey is now " + this.age);
  }

  };
var m = new monkey("Gorilla", "Also Fruit", 12);
console.log(m.out());
console.log(m.birthday());
