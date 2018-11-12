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

//ForEach challenge
//Multiply each numher in array by 2
function doubleValues(arr){
    newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2);
    })
    return newArr;
}
console.log(doubleValues([1,2,3]));

function onlyEven(arr){
    newArr=[];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val);
        }
        return newArr;
    })
}
console.log(onlyEven([1,3,6]));

function showMeFirstAndLast(arr){
    newArr=[];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1]);
    })
    return newArr;
}
console.log(showMeFirstAndLast([1,2,3,4]));

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}
function multiplyThree(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 3);
    });
    console.log(newArr);
}
console.log(multiplyThree([1,2,3,4,5]));
