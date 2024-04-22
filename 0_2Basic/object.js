//singleton::

//object literals::



const mySym = Symbol("key1")
const jsUser = {
    name:"Mingtindu",
    [mySym]:"hello",
    age:19,
    location:"Kathmandu",
    email:"ming@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}
//Object.freeze(jsUser);//can not change value of an object:
// console.log(jsUser.name);
// console.log(jsUser["email"]);//good way to access object values:

// console.log(jsUser[mySym]);
//Object.create

jsUser.greeting = function (){
    console.log("Hello js user");
}
jsUser.greetingTwo = function (){
    console.log(`Hello js user ${this.name}`);
}
console.log((jsUser.greeting()));
console.log((jsUser.greetingTwo()));