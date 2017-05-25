//inheritance//

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
