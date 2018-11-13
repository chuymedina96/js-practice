/* REDUCE
- ACCEPTS a callback function and an optional second parameter
- Iterates through an array
- Runs callback on each value in the array
- The first parameter to the callback is either the first value in the array or the optional second parameter
- The first parameter to the callback is often called the "Accumulator"
- The return value from the callback becomes the new accumulator
    - whatever is returned from the callback, becomes the new accumulator!
*/
var arr = [1,2,3,4,5];

arr.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
}); //result will be ten. Added up all numbers as it iterates through the array.

var names = (["Chuy ", "Lali ", "Orlando ", "Chris"]);

names.reduce(function(accumulator, nextValue){
    return accumulator += "" + nextValue;
}, "The instructors are ");


var arr =[5,4,1,4,5]
arr.reduce(function(accumulator, nextValue){
    if(nextValue in accumulator){
        accumulator[nextValue]++;
    } else{
        accumulator[nextValue] = 1;
    }
    return accumulator;
}, {});

function sumOddNumbers(arr){
    return arr.reduce(function(accumulator, nextValue){
        if(nextValue % 2 !== 0){
            accumulator += nextValue;
        }
        return accumulator;
    }, 0);
}
sumOddNumbers([1,2,3]);

function createFullName(arr){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue.first + " " + nextValue.last);
        return accumulator;
    }, []);
}
createFullName([{first: "Chuy", last: "Medina"}, {first: "Jesus", last: "Medina"}]);
