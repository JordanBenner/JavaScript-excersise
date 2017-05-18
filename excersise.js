// Hello, you!//
function hello(name){
  let output = 'Hello ' + name;
  console.log(output);
  return output;
}

// Hello, you! Part2//
function hello(){
  console.log('Hello world!');
}

// Madlib//
function madlib(name, subject){
  let output = name + 'favorite subject in school is' + subject;
  return output;
}

// Tip Calculator//

function tipAmount(bill, service) {

  if (service == 'good') {
    console.log(bill * .20);
  } else if (service == 'fair') {
    console.log(bill * .15);
  } else if (service == 'bad'){
    console.log(bill * .10);
  }

}
tipAmount(100, 'good')

// Tip Calculator 2 //

function totalAmount(bill, service, total){
  if (service == 'good') {
    console.log(bill + bill * .20 );
  } else if (service == 'fair') {
    console.log(bill + bill * .15);
  } else if (service == 'bad'){
    console.log(bill + bill * .10);
  }
}
totalAmount(100, 'good')

//Tip Calculator 3 //

function splitAmount(bill, service, amount){
  if (service == 'good') {
    console.log(bill * .20 / amount);
  } else if (service == 'fair') {
    console.log(bill * .15 / amount);
  } else if (service == 'bad'){
    console.log(bill * .10 / amount);
  }
}
splitAmount(100, 'good', 3)

// Print Numbers //

//while loop //
count = 0
while (count < 10) {
  count += 1;
  console.log(count);
}

// for loop //
function printNumbers(){
  for (var count=0; count < 10; count++) {
  console.log(count);
}
}
printNumbers()

// print a square //

function printSquare(size){
  for (let i = 0; i < size; i++) {
    console.log('*'.repeat(size));
  }
}

// Print a box //

function printBox(width, height){
  var rowOfStars = '*' .repeat(width);
  var middleRow = "*" + " ".repeat(width - 2) + "*\n";
  var middle = middleRow.repeat(height -2);
  var theWholeBox = rowOfStars + '\n' + middle + rowOfStars;
  console.log(theWholeBox);

}
printBox(6, 4)

// Print Banner //

function printBanner(text){
  var rowOfStars = "*" .repeat(text.length + 4);
  var middleRow =  "* "+ text + " *\n";
  var wholeBanner = rowOfStars + '\n' + middleRow + rowOfStars;
  console.log(wholeBanner);
}
printBanner("Welcome To Digital Crafts!")

//
