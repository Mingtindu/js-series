//Stack , Heap:
//Stack (Primitive)
//copy value

//Heap (Non-primitive)
//reference of original value

let myName = "mingtinduSherpa";

let anotherName = myName;

anotherName = "chai aur code";
//In this another name = myName it actually send the copy of myName variable 
//Any change in anotherName variable does not effect to myName variable :in primitive datatye


let userOne = {
    name:"mingtindu",
    id:123,
}

let userTwo= userOne;

userTwo.name= "sherpa";
//In this case:: in userTwo = userOne it send the reference of userOne stored in heap
//any change in userTwo directly effect userOne ::
//Non primitive 
console.log(userOne);
console.log(userTwo);