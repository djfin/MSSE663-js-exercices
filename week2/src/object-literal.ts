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
  