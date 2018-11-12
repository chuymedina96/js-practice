/*Some
- iterates array as well
- runs a callback function on each value in the array
- If the callback returns true for at least one single value, returns true.
- Otherwise, false
- Just like filter, the result will always be evaluated to a BOOLEAN
*/

//example

var arr =[1,2,3];

arr.some(function(value, index, array){
    console.log(value < 2);
})

arr.some(function(value, index, array){
    console.log(value > 4);
})

function some(array, callback){
    for(var i = 0; 1 < array.length; i++){
        if(callback(array[i], i, array)){
            return true;
        }
    }
    return false;
}

//using some in a function
function hasEvenNumber(arr){
    return arr.some(function(value){
        return value % 2 === 0;
    });
}
console.log(hasEvenNumber([1,2,3,4,5,]));

function hasComma(str){
    return str.split("").some(function(value){
        return value === ",";
    });
}
console.log(hasComma("Hello, there")); //true
console.log(hasComma("Hello there")); //false