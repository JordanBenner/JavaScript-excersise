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
  }
};

daughter.__proto__ = mom;
mom.showInfo();
console.log(daughter.firstName + ' ' + mom.lastName + ' ' + mom.eyeColor + ' ' + daughter.hairColor);
