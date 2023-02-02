// 1st problem: Create a superhero object with a “name” attribute, a 
// “power” attribute, and a method called ability that returns the 
// hero’s name and power.  Console.log calling the object’s method.

/*
class Superhero {

    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

    ability() {
        console.log(`${this.name} has ${this.power}`);
    }
}

const person1 = new Superhero("Jorge" , "Flight");
person1.ability();
*/


// 2nd problem: Create a function that takes an array of numbers and 
// returns a new array with both the minimum and maximum numbers, in 
// that order.
/*
function minMax(arr){
    let arr2 = []
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    arr2.push(min);
    arr2.push(max);

    // return {min, max, arr2};
    return arr2
}

console.log(minMax([1, 2, 3, 4, 5]));
*/


// 3rd problem: Create a function that takes a number as an argument. 
// The function will add up all the numbers from 1 to the number you 
// passed to the function, except skip any number divisible by 5.
/*
// function summation(num) {
//     for ( i=0 ; i<=num ; i++) {

//         if ( num % 5 === 0 ){
//             num += 1;
//         } else {
//             i++
//         }
//     }
//     return num;
// }

// console.log(summation(3));
// expected: 6
// math that should have been done: 1 + 2 + 3

function sumWithoutFive(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (i % 5 !== 0) {
        sum += i;
      }
    //   console.log(sum)
    }
    return sum;
}

console.log(sumWithoutFive(6))
*/



/*
// Write a JavaScript function that takes in an array of Numbers 
// and returns its median.
function median(arr) {

    arr.sort((a,b) => a - b);
    console.log(arr);

    for( i=arr.length-1 ; i > 2 ; i--){
        arr.pop()
        arr.shift()
        console.log(arr)

        if (arr.length === 2) {
            return (arr[0]+arr[1])/2;
        } else if(arr.length === 1) {
            return arr[0]
        }
    }
}

// console.log(median([8, 7, 6, 5, 4, 3, 2, 1]))
console.log(median([3, 8, 2, 1, 6, 9, 10, 32, 7]))
*/



/*
// Given a string, reverse each word in the sentence.
function reverse(words){
    let arr1 = words.split("")
    console.log(arr1)

    let arr2 = arr1.reverse();
    console.log(arr2)

    let reversed = arr2.join(" ")
    return reversed
}

console.log(reverse("yes sir"))
*/




// How could I empty the array below?
//              var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
// var arr =  ['a', 'b', 'c', 'd', 'e', 'f'];

