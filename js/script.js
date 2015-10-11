//for the variable i, it equals 1 and if 1 is less than or equal to 100 add 1.

//if i is divisible by 3 or 5 print FizzBuzz

for (var i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if(i % 3 === 0) {
    console.log('fizz');
  } 
  else if(i % 5 === 0){
    console.log('buzz');
  }
  else {
    console.log(i);
  }
}