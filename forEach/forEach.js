var arr = [1,2,3];

arr.forEach(function(value, index, arr){
    console.log(value);
});

function halfValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val / 2);
    });
    console.log(newArr);
}
halfValues([2,4,6]);