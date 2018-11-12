/*
- map creates and array
- iterates through it as well
- runs a callback function
- adds result of callback function and added it to the array.
- returns the array after iterating.
MAP ALWAYS returns a new array of the same length.
*/
var arr = [1,2,3];
arr.map(function(value, index, array){
    console.log(value * 2);
});
//This is how map works. Map makes the job a lit simpler.
function map(arr ,callback) {
    var newArr=[];
    for(var i =0; i<arr.length; i++){
        newArr.push(callback(arr[i], i, arr));
    }
    console.log(newArr);
}
console.log(map([5,6,7]));

function tripleValues(arr){
    return arr.map(function(value){
        console.log(value * 3);
    })
}
tripleValues([3,4,6]);