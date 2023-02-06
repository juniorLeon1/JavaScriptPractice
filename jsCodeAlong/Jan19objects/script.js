// Anatomy of an Object

var objectName = {key:"value" , key1:"value1"};

// a pair is join together with a semi-colon
// objects are seperated by a comma

//ex:
var Junior = {carYear:"2013" , carMake:"Subaru" , carModel:"Impreza"}

console.log(Junior.carYear);

// values can be reassigned by

Junior.carMake = "McLaren"

console.log(Junior.carMake);





// test
var studentsCars = [
    {
        carOwner: "Junior" , 
        carYear: "2013" , 
        carMake: "Subaru" , 
        carModel: "Impreza"
    }
    ,
    {
        carOwner: "Alvaro" , 
        carYear: "2001" , 
        carMake: "Ford" , 
        carModel: "F-150"
    }
];

//technically this is an array of OBJECTS

console.log(studentsCars[1].carYear);




// !! Ask why I can reassign any of the object's keys and values even if the object's variable type is set to const !!

const juniorLeon = {carYear:"2013" , carMake:"Subaru" , carModel:"Impreza"};

console.log(juniorLeon.carMake);

// why can values can be reassigned by line 55 if the variable type is set to const in line 49?

juniorLeon.carMake = "McLaren"

console.log(juniorLeon.carMake);