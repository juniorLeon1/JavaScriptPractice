// make a function that can take two arrays of numbers as an argument, combine them,
// and find the median
function twoArrays(arr1, arr2) {
    //combine two number arrays and list them in ascending order
    let arr3 = arr1.concat(arr2).sort((a, b) => a-b);
    console.log(arr3);

    // i need a for loop that removes the first and last integers of arr3 until there is
    // 1 integer left or 2 depending on if the amount of arr3 is odd or even respectively
    for ( i=arr3.length-1 ; i>2 ; i-- ){
        arr3.pop();
        arr3.shift();
        console.log(arr3);

        if(arr3.length === 2){
            return (arr3[0] + arr3[1]) / 2;
        } else {
            if (arr3.length === 1){
                return arr3[0];
            }
        }
    }
}
// test with even amount
console.log(twoArrays([-9, 8, 6, 19, 4], [3, 9, 2, -42, 20]));
// expected median output: (4+6)/2 = 5

// test with even amount where the last two numbers are a negative and a positive number
console.log(twoArrays([8, 4, -2, 3], [-8, -4]));
// expected median output: ((-2)+3)/2 = 0.5

// test with odd amount
console.log(twoArrays([62, 48], [412, -82, -77]));
// expected output: 48