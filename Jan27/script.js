/*
// Your task is to make a function that can take any non-negative 
// integer as an argument and return it with its digits in descending 
// order. Essentially, rearrange the digits to create the highest 
// possible number.
function descendingOrder(n){
    let nums = n.toString().split("");
    console.log(nums)
    nums.sort((a, b) => b - a);
    console.log(nums)
    return parseInt(nums.join(""));
  }

  console.log(descendingOrder(98173465134));
  */



/*
// Given an array of strings, make a function take that removes the 
// first and last letter of each element. Assume each element is atleast
// 3 letters

function removeLetters(arr) {
    for ( i=0 ; i < arr.length ; i++) {
        
    }

    return arr;
}

console.log(removeLetters(["hello", "cat", "dog", "apple"]));
*/


let superHero = {
    name : "spiderman",
    power : "web",
    age : "50",
    myAbility() {
        return `${this.name} has ${this.power} and is ${this.age} years old`;
    }
}

console.log(superHero.myAbility());
superHero.myAbility();