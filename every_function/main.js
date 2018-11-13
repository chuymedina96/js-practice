/*Some
- iterates through an array
- runs a callback function on each value in the array
- If the callback return false for any single value in the array, return false
- Just like filter, and some, the result will always be evaluated to a BOOLEAN
- Think of this function as a more strict version of the SOME function
*/

//example

var arr = [-1,-2,-3]

arr.every(function(value, index, arr){
    console.log(value < 0);
})
//true
arr.every(function(value, index, arr){
    console.log(value > 0);
})
//fasle

function every(array, callback){
    for(var i =0; i < array.length; i++){
        if(array[i], i, array === false){
            return false;
        }
    }
    return true;
}

function checkIfLowercase(str){
    return str.split("").every(function(value){
        return value === value.toLowerCase(); //checks to see if the value is strictly equal to all lowercase.
    });
}
console.log(checkIfLowercase("hello world")); //true
console.log(checkIfLowercase("hello World")); //false, so strict

function allArrays(arr){
    return arr.every(Array.isArray);
}
console.log(allArrays([[1], [2], [3], [4]])); //true
console.log(allArrays([[1], [2], [3], [4], {}])); //false because of empty object