// function declaration



// using arguments.  
function greet(a){
    console.log("Hello",arguments)            // can call multiple variable wihtout overloading
}                                             // argumnets do no existst in arrow functions

greet(1,2,3,4,"ABC",true,11);


function noOfArg(){
    console.log(arguments.length)
}

 noOfArg();

 // using rest operators

function findArg(...arg){
    //print all arguments                         //spread operators- to open deep copy or shallow copy - ...
    console.log(arg)
}

findArg(1,2);

//buisness rules


let price_each = 500;

let final_price;
const item_count= prompt("Enter the quantity");
let price=price_each*item_count;

if(item_count>10){
     final_price= 0.90*price;
}
else{
    final_price=price;
}

final_price= final_price + final_price*0.18;

console.log(final_price);



//This Keyword 

const x = {
    name: "Makima",
    role: "Js Developer",
    exp: 50,
    show: function(){
        console.log(this)
        console.log("Hi I am", this.name)
    }
}
//lexical this

const y = {
    name: "Brace",
    role: "Py Developer",
    exp: 3000
}


x.show();

//nested funaction
 
 function outer(){
    console.log("outer function was called");

    function inner(){
        console.log("inner function was called");
    }
    inner();  // this will work 
 }

 inner(); // this won't out of scope
 outer();


 //nested function scope

 let b =10;
 function outer(){
    let b=20;
    function inner(){
        console.log(b)
    }
    inner();
 }
