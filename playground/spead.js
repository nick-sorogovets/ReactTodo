// function add(a, b) {
//   return a + b;
// }

// console.log(add(3, 1));

// const toAdd = [9, 5];

// console.log('Spead', add(...toAdd));


// const groupA = ['Jen', 'Cory'];
// const groupB = ['Viktor'];
// const final = [3, ...groupA, ...groupB];

// console.log(final);

const person =  ['Andrew', 25];
const personTwo = ['Jen', 29];

function greet(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

greet(...person);
greet(...personTwo);