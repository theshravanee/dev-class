// ------Asynchronous code-------

console.log("Before");

function fun(){
    console.log("I am fun");
}

setTimeout(fun,3);  // if 0 --> js doesn't get the time out function, it is defined by browser;
                    //  js waits for the browser to reply but it will entertain the reply after all js lines are executed
                    //prints(fun,0)- Before After I am fun

console.log("After");
console.log("After");
console.log("After");
console.log("After");
//GEC will release -->GEC-Global Execution Context
//call stack is free
//call back queue is called 
