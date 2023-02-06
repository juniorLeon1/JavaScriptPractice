
function nameIt(parm1, parm2) {
    // code I want to run
    // we're looking at the function declaration
    // return something e.g. value/object
}

function sum(a, b) {
    return a + b ;
}

sum(5, 10);
console.log(sum(5, 10));

let bigSumOfMoney = console.log(sum(1000000, 250000));


// side note 
// function quadraticPlus(a, b, c){
//     return (((-b) + Math.sqrt((b*b)-(4 * a * c)))/(2 * a))
// }

// function quadraticMinus(a, b, c){
//     return (((-b) - Math.sqrt((b*b)-(4 * a * c)))/(2 * a))
// }

// console.log(quadraticPlus(1, 30, 4));
// console.log(quadraticMinus(1, 30, 4));





// examples of anonymous functions 




// learn about setTimeout() with MDN

setTimeout(function() {
    console.log('Times Up');

}, 3000);