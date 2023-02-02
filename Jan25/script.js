/* 
let num = 2;
if(num % 2 === 0) {
    console.log(`${num} is even`)
} else {
    console.log(`${num} is odd`)
}

function evenOdd(num) {
    if(num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}
*/



/*
console.log(evenOdd(8));
console.log(evenOdd(29));
console.log(evenOdd(4187246129847));

let arr = [1,2,3,4];
console.log(arr.reverse());

function myArr(arr) {
    return arr.reverse();
}
console.log(myArr([1,2,3]));
*/



/*
    let median;
    if(arr.length % 2 == 0) {
      median = (arr[arr.length/2] + arr[arr.length/2 - 1])/2
    } else {
      median = arr[Math.floor(arr.length/2)];
    }
*/



/*
function math(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = max - min;
    let ascending = arr.sort((a, b) => a - b);




    return {min, max, range, ascending};
}

console.log(math([9, 3, 6, 10, 2]));
*/



/*
// make a function that can take an array argument and multiplies each element
// in array by 2 using a for loop and then return it
function listArray(arr) {
    console.log(arr);

    for(let i = 0 ; i < arr.length ; i++) {
        arr[i] *= 2
        // console.log(arr)
    };
    return arr;

};

console.log(listArray([82, 6, 49]));
*/


/*
// create a function that includes an if else statement that determines
// whether a number is even or odd

function evenOdd(num) {
    if ( num % 2 === 0 ) {
        return `${num} is even`
    } else {
        return `${num} is odd`
    }
}

console.log(evenOdd(3));
*/



/*
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;

        this.fat = false;
    }

    eatsJunk() {
        this.fat = true;
    }

    worksOut() {
        this.fat = false;
    }
}

const person1 = new Person("Jr" , 20 );
console.log(person1);
console.log(person1.fat);
person1.eatsJunk();
console.log(person1.fat);
person1.worksOut();
console.log(person1.fat);

class Successful extends Person {
    constructor (name, age, job) {
        super(name,age);
        this.job = job; 
    }
}

const person2 = new Successful("Jr2", 20 , "Coding Apprentice");
console.log(person2)
*/




function deDupeList(arr) {
    //create an empty array to push only one of each into
    let noDupe = [];

    // loop the array's items and 
    arr.forEach(e => {
        if (noDupe.indexOf(e) != -1) {
            // 
            return
        } else {
            //
            noDupe.push(e)
        }
    });
    //return the 
    return noDupe
}

console.log(deDupeList([1, 1, 2, 3, 3, 4, 4, 4]));