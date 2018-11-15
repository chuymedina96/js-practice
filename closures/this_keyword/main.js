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