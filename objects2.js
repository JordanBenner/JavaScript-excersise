//inheritance one//

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;
console.log(daughter.firstName + ' ' + mom.lastName + ' ' + mom.eyeColor + ' ' + daughter.hairColor);

//inheritance two //
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function(){
    console.log(mom.firstName + ' ' + mom.lastName + ' ' + mom.eyeColor + ' ' + mom.hairColor);
  }
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown',
  showinfo: function(){
    console.log(daughter.firstName + ' ' + daughter.hairColor);
};

daughter.__proto__ = mom;
mom.showInfo();
console.log(daughter.firstName + ' ' + mom.lastName + ' ' + mom.eyeColor + ' ' + daughter.hairColor);

//Person //

class Person {
  constructor(name){
    this.name = name;
    this.friends = [];
  }

  createGreeting(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  }

  addFriend (friend) {
    this.friends.push(friend);
  }

  greet(other) {
  console.log(this.createGreeting(other));
  }
};

var Jordan = new Person();
Jordan.addFriend('bob');

// these thises //

class Person {
  constructor(name){
    this.name = name;
    this.friends = [];
  }

  lazyGreet(other) {
    setTimeout(
      () => {
        this.greet(other)
      }, 2000);
  }

  addFriend (friend) {
    this.friends.push(friend);
  }

  greet(other) {
  console.log('Yo ' + other.name + '! from ' + this.name + '.');
  }
};

var Jordan = new Person('Jordan');
Jordan.addFriend('bob');

//these thises 2 //

class Person {
  constructor(name){
    this.name = name;
    this.friends = [];
  }

  createGreetingForFriends(other) {
    return 'Yo ' + other.name + '! from ' + this.name + ',' + 'Yo ' + other.name + 'from ' + this.name '.';
  }

  addFriend (friend) {
    this.friends.push(friend);
  }

  greet(other) {
  console.log(this.createGreetingForFriends(other));
  }
};

var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
// alfie.createGreetingsForFriends();
