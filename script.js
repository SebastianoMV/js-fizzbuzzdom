const container= document.querySelector('.container');

let limit = 101;
const fizz ='Fizz';
const buzz ='Buzz';
const fizzbuzz = 'FizzBuzz'

for(let i = 1; i < limit; i++){
  
  if(i % 3 && i % 5){
    console.log(i);
  } else if( i % 3 == 0 && i % 5 == 0 ){
    console.log('FizzBuzz');
  }else if(i % 3 == 0){
    console.log('Fizz');
  } else if(i % 5 == 0){
    console.log('Buzz');
  }
  
}
