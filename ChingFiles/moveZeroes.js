// make a function that can take an array with numbers as an argument
// that moves all the zeros the end of the array
function move(arr){
    var temp1 = [];
    var temp2 = [];
    var temp3 = [];

    while (arr.length !== 0) {
        if (arr[0] == 0) {
            temp1.push(arr.shift())
        } else {
            temp2.push(arr.shift())
        }
        // console.log(arr);
        // console.log(temp1);
        // console.log(temp2);
    }

    temp3 = temp2.concat(temp1);
    return temp3;
}

console.log(move([1, 3, 0, 2, 4, 0, 0, 8, 9]))