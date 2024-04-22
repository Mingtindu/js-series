const tinderUser = {}

tinderUser.id = "121c"
tinderUser.name= "Tendi"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

//object inside object
const regularUser = {
    email:"hi@gmail.com",
    fullname:{
        firstname:"Mingtindu",
        lastname:"Sherpa"
    }
}

console.log(regularUser.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2};
console.log(obj3);

const users =[
    {
    id:1,
    email:"ming@gmail.com"
}
]

users[0].email;

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));