let cookie = {
    name: 'Chocolate Chip',
    isGlutenFree: true,

    // in they key string example below, quotaions are required
    // because it has a special character in it (+)
    '+Yummy': true,
    // another example where quotations are required for that reason
    'cookie=Yummy?' : true
};

console.log(cookie);

// dot notation
console.log(cookie.name);

//bracket notation
console.log(cookie['isGlutenFree']);
console.log(cookie['+Yummy']);
console.log(cookie['cookie=Yummy?']);

// value was reassigned
cookie.name = 'sugar' ;

console.log(cookie.name);