function outlier(arr) {
    let even = arr.filter(function(num){
        return num % 2 === 0;
    });
    console.log(even);

    let odd = arr.filter(function(num){
        return num % 2 !== 0;
    });
    console.log(odd);

    
    if(even.length === 1){
        return even[0];
    } 
    else {
        return odd[0];
    }
}

console.log(outlier([2, 4, 6, 8, 3]));

console.log(outlier([50, 92, 64, 88, 99]));