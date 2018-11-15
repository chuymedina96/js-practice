/*
- Only variables in the inner function are remembered
PRVIATE VARIABLES
    - IN other languages, there exists support for variables that cannot be modifed externally, 
        in javascript, we dont have built in. Closure help!
CLOSURE 
    - exists when an inner function makes use of variables declared in an outer function which has previously returned.
    - does not exist if you do not return an inner function and if that inner function does not make use of 
      variables returned by an outer function.
    - Javascript will only remember values that are being used inside of the inner function, 
        not all variables defined in the outer function
    - We can use closures to create private variables and write better code that isolates our 
        logic and application.

*/
function outerFn(){
    var data="something from the outerFn";
    var fact="remember me!";
    return function innerFn(){
        
        
        debugger
        return data;
        return fact;
    }
}
var outer = outerFn();
outer();

function counter(){
    var count = 0; //count is a private variable that cannon be accessed in the global scope. We crerated closure.
    return function inner(){
        count++;
        return count;
    }
}
counter1 = counter();
counter1();

//uses a design pattern called Module design
function classRoom(){
    var instructors = ["Lali", "Chuy"];
    return {
        getInstructors: function(){  // module design
            return instructors.slice();
        }, 
        addInstructors: function(instructor){ //module design
            instructors.push(instructor);
            return instructors.slice();
        }
    }
}

/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
    if(arguments.length ===1){
        return function(b){
            return a * b;
        }
    }
    return a * b;
}

/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed){
            guesses++;
            if(guess === answer){
                completed = true;
                return "You got it!";
            } else if(guess > answer) return "Too high!";
              else if(guess < answer) return "Too low";
              else if(guesses === amount){
                  completed = true;
                  return "Too many guess, the answer was" + answer;
              }
        }
        return "All done playing";
    };
}


