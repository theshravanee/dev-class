let str = "   hbceaiovnr.  jnvuner "

//substring

console.log(str.substring(10)) //all characters after index 10

//start<<end

console.log(str.substring(9,14)) // 9 inclusive 14 exculsive 

//start>>end

console.log(str.substring(14, 9)) // index will be swapped before applying substring 

//-ve

console.log(str.substring(-100)) // prints from 0 to end


//Slice Function

let str1=str.slice(10); //print all char after 10

//start<<end
let str2=str.slice(9,14);
//start>end
let str3= str.slice(14,9);
//-ve
let str4=str.slice(-10); // cuts from the right

console.log(str.includes("afhgk")); // checks whethere the given substring is present ; case sensitive; boolean 


//question

let searchQuery = " Learn JavaScript Functions Arrow IIFE ";

console.log(searchQuery.trim());
let st=searchQuery.trim();
console.log(searchQuery.trim().length);
console.log(st.toLowerCase());
console.log(st.toUpperCase());
console.log(st.substring(6,16));
console.log(st.includes("functions"));
console.log(st.includes("arrow"));
console.log(st.includes("life"));
console.log(st.substring(6,7));
console.log(st.charCodeAt(0));
let s=st.toLowerCase();
console.log(s.includes("javascript"));


//Arrays 

let arr = [2,2,6,3,567,2667];

// slice function
console.log(arr);
console.log(arr.slice(0,4));

//splice function
arr.splice(0,4); // will append the og arry and change it; remove the index mentioned ; start index- inclusive lat - exclusive
console.log(arr);
// can add elements too
arr.splice(1,34,5,51,52,662);
console.log(arr);


//Mutability

//arrays and objects are mutable
//mutable- can update and read the same eg- string in java are immutable can't be changed once created 
 let a={name:"abby"};
 let b=a; //b is a shallow copy of object a
 b.name="betty"; 
 console.log(a.name); //prints betty

 let x=10;
 let y=x
  y=7
  console.log(y)//7
  console.log(x)//10
  // x, y are not objects

 let a1={name:"abby"};
 let b1={...a1}; //spread opt opens it and then assigns so wll work like the x,y case; provides values in terms of keys; can keep copy of the og 
 b1.name="betty"; 
 console.log(a1.name)//print abby

 //Deep Objects and nesting
 //objects inside objects
  let i={name:"avfic", address:{place:"pune", city:"rive", l1:{1:"bcnvr"}}};

  //JSON.stringify()
    //  converts objects into JSON strings to send data across networks/local storage
  //JSON.parse()
//   converts back to json string from object 

// used to make deep copies 
let copy = JSON.parse(JSON.stringify(i));
console.log(copy)







