/*
    THIS 
        - a reserverd keyword in javascript
        - usually determined by how a function is called(called 'execution content')
        - can be determined using one of four(global, object/implicit, explicit, and new)
        
    1. 
        - GLOBAL CONTEXT
            - when 'this' is not inside of a declared object
            ex: console.log(this); //this returns as window
    
    
    - 'this' inside a function and 'use strict'
    
    
    USE SCRICT
        - when use strict is enabled, the keyword this when in a function, it returns undefined.
        
    OBJECT/IMPLICIT BINDING
*/

function whatIsThis(){
    return this; //this keyword needs to be inside an object for it to work.
}
whatIsThis(); //this will return the window as well.

function variablesInThis(){
    this.person = "Ellie";
}
variablesInThis();
console.log(person);

//use strict

"use scrict";

console.log(this);
function whatIsThis(){
    return this;
}
whatIsThis();

"use scrict";

function variablesInThis(){
    this.person = "Ellie";
}
//this will return undefined because we're using "use scrict"


 // OBJECT/IMPLICIT BINDING
 // When the keyword 'this' is inside of a declared object, the value of the keyword 'this' will
 // always be the closest parent object
 // 'use scrict' does NOT make a difference here
 var person ={
     firstName: "Chuy",
     sayHi: function(){
         return "hi" + this.firstName;
     },
     determineContext: function(){
         return this === person;     
     }
 }
 
 var person ={
     firstName: "Ellie",
     determineContext: this
 }

//Nested Objects
// What happens when we have a nested object
// Need a way of exlpicitly changed the value of this in the second object. Call, apply, bind can do this.
var person={
    firstName: "chuy",
    sayHi: function(){
        return "hi " + this.firstName;
    },
    determineContext: function(){
        return this === person
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName; //returns Hello undefined because this doesnt have access to firstName variable
        },
        determineContext: function(){
            return this === person; //returns false for the same reason ^^
        }
    }
}
// Explicit Binding
// Choose what the value of this is by using call, bind, and apply
// call, bind, and apply can only be used for functions

//CALL
// Parameters- thisAug,a,b,c,d,e
// Invoke immediatley- yes
var person={
    firstName: "chuy",
    sayHi: function(){
        return "hi " + this.firstName;
    },
    determineContext: function(){
        return this === person
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName; //returns Hello undefined because this doesnt have access to firstName variable
        },
        determineContext: function(){
            return this === person; //returns false for the same reason ^^
        }
    }
}
console.log(person.dog.sayHello.call(person));
console.log(person.dog.determineContext.call(person));

//Apply
// Parameters- thisAug,[a,b,c,d,e]
// Invoke immediatley- yes

//Bind
// Parameters- thisAug,a,b,c,d,e
// Invoke immediatley- no
