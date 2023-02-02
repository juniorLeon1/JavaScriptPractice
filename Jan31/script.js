/*
function nums (arr1) {
    let arr2 = arr1.sort((a, b) => b - a);
    console.log(arr2)
    if (arr2.length < 3 ) {
        return `not enough integers`;
    } else {
        return `second highest: ${arr2[1]}, second lowest: ${arr2[arr2.length-2]}`;
    }
}

console.log(nums([5, 7, 8, 2, 9, 1, 6]));
console.log(nums([5, 2, 9]));
*/

/*
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus); 
console.log(fruits);

fruits.splice(1, 0, 4);
console.log(fruits);
*/

/*
let numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(element, index, array) {
    // console.log(element * 2)
    console.log( element%2 === 0)
})
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let arr2 = []
arr.forEach(function(e){
    if ( e === 7) {
        arr2.push("boom");
    } else {
        arr2.push(e);
    }
})

console.log(arr2);
*/

// the more popular way:

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
function boomify7 (arr) {
let arr2 = [];
for (i = 0 ; i < arr.length ; i++) {
    if (arr[i] === 7) {
        arr2.push("boom");
    } else {
        arr2.push(arr[i])
    }
}
return arr2;
}

console.log(boomify7(arr));
*/


/*
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution 
// so that it returns the sum of all the multiples of 3 or 5 below the number 
// passed in. Additionally, if the number is negative, return 0 (for languages 
// that do have them).

function solution(number){
    let allNums = []
    let multiples = []
    let sum = 0;

    for ( i=0 ; i<=number ; i++ ) {
        allNums.push(i)

        if ( allNums[i]%3===0 || allNums[i]%5===0 ) {
            multiples.push(allNums[i]);
        }
    }

    console.log(allNums)
    console.log(multiples);
    
    for ( i=0 ; i<multiples.length ; i++ ) {
        sum += multiples[i]
    }

    return sum
}

console.log(solution(10));
*/

//the above solution could be shortened by:

/*
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

console.log(solution(10));
*/

/*
function rootSq(arr) {
    for ( let i=0 ; i<arr.length ; i++) {
        if (arr[i] === 7) {
            arr[i] = "boom";
        }
    }
    return arr;
}

console.log(rootSq([1, 7, 8, 7, 9, 7]))
*/

/*
function getSum(a, b) {
    let arr1 = [];
    let sum = 0;

    for ( i=a ; i<=b ; i++) {
        arr1.push(i);
    }


    if ( a > b ){
        for ( i=b ; i<=a ; i++) {
            arr1.push(i);
        }
    }

    for ( i=0 ; i<arr1.length ; i++){
        sum += arr1[i];
    }

    console.log(arr1);
    return sum
}

console.log(getSum(-1, 8))
console.log(getSum(8, -1))
// */

