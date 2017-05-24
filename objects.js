//object exercise 1//
function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log(`Hello ${other.name}, I am ${this.name} my email is ${this.email} and my direct line is ${this.phone}.`);
};
Person.prototype.info =function(){
  console.log(`My Contact information is ${this.email} ${this.phone}`);
};


var Jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
var Sonny = new Person('Sonny', 'sonny@hotmail.com', '483-586-4948');

Jordan.greet(Sonny);
Jordan.info();
