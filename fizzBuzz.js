//basic fizzbuzz
console.log('Begin basic');
function basicBuzz(min, max, fizzNum, buzzNum) {
    for (let i = min; i <= max; i++) {
       let fizz = i%fizzNum === 0;
       let buzz = i%buzzNum === 0;
        if (buzz && fizz ){
            console.log('FizzBuzz')
        }
        else if (buzz) {
            console.log("Buzz")
        }
        else if (fizz) {
            console.log("Fizz");
        }
        else
            console.log(i)
    }
}
basicBuzz(1, 100 , 3, 5);

console.log('Begin super fizz buzz');
function superFizzBuzz(min, max, divisibles, words) {
    if(divisibles.length !== words.length){
        console.log('length of divisible numbers and words do not match! try again')
    }
}
superFizzBuzz(1,10,[1,2],['am', 'a', 'word']);