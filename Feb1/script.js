/*
// make a function that takes a string and returns true or false depending on whether
// it is palidrome or not

function palidrome(x) {
    let original = x.toLowerCase();
    console.log(original);

    let reversed = x.split("").reverse().join("").toLowerCase();
    console.log(reversed);

    if (original === reversed) {
        return true;
    } else {
        return false;
    }

}

console.log(palidrome("truck"))
console.log(palidrome("racecar"))
*/


/*
function countVowels(string) {
    string.toLowerCase();
    let arr1 = string.split("");
    console.log(arr1)
    let arr2 = []

    for ( i=0 ; i<arr1.length ; i++ ) {
        if ( arr1[i] === "a" || arr1[i] === "e" || arr1[i] === "i" || arr1[i] === "o" || arr1[i] === "u" ) {
            arr2.push(arr1[i])
        }
    }
    
    console.log(arr2)
    return arr2.length
}

console.log(countVowels("yes sir"));
*/

/*
function stringLengths ( x, y ) {
    if (x.length === y.length) {
        return `These strings are both ${x.length} characters long`;
    } else if (x.length > y.length) {
        return `The first and second strings are respectively ${x.length} and ${y.length} characters long. The first string is longer by ${x.length - y.length} characters`;
    } else if (y.length > x.length) {
        return `The first and second strings are respectively ${x.length} and ${y.length} characters long. The second string is longer by ${y.length - x.length} characters`
    }
}

console.log(stringLengths("yes", "sir"));
console.log(stringLengths("Junior", "Leon"));
console.log(stringLengths("Leon", "Junior"));
*/