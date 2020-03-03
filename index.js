
const nicoInfo = {

    name: "Nico",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods","LOTR","Oldboy"],
    favFood: [
        {
            name:"Kimchi",
            fatty:false
        },
        {
            name:"Cheese burger",
            fatty:true
        }
    ]
}

function sayHello(name,age){
    return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas",15);

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    mult: function(a,b){
        return  a * b;
    },
    div: function(a,b){
        return a/b;
    },
    expo: function(a,b){
        return a**b;
    }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5,5);
const mult = calculator.mult(5,5);
const div = calculator.div(5,5);
const expo = calculator.expo(5,5);

console.log(plus,minus,mult,div,expo);

