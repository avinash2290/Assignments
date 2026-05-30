// Syntax : Declaration Variable = Data;

//In JavaScript, we can declare the vaiable by using three different keywords.

//1. var (var will be used to declare the variable in the old version of JaaScript , we need to avoid it in the latest version)
//2. let(let will be used to declare the value that can be reassigned or modified)
//3. const(Const will be used to declare the values that cannot be reassigned or modified)

// These three different variables declarations will differ mainly based on 4 important parameters.

//1. Initialization
//2. Reassignment
//3. Re-declaration
//4. Scope

//1. Initialization => It means, adding he value at the time of declaration
var a; // it's not mandatory to initialize at the beginning. We can add later as well
let b; // it's not mandatory to initialize at the beginning. We can add later as well
const c = 10; //it is mandatory to initialize the value at the beginning.

//2. Reassignment => Modify the original value.
a = 20; //var will allow reassignment
b = 30; //let will allow reassignment
//c = 40; //const won't allow reassignment

//prunt the values
console.log(a);
console.log(b);
console.log(c);

//3. Re-declaration => USing the same variable to store some other data by re-declaring it
var a = "avinash"; // var allow redeclaration
//let b = "Pragya"; //let won't allow redeclaration
//const c = "Avi";

//print the values
console.log(a);
console.log(b);
console.log(c);

//4. Scope => Accessing the data out of the block or within the block.

//let and const are blocked-scoped, which means they are only accessible within the block they are defined in.
// var is not block-scoped

{
    var x = 10;
    let y = 20;
    const z = 30;

    //print the values
    console.log("Inside the block");
    console.log(x);
    console.log(y);
    console.log(z);
}

//print the values
    console.log("Outside the block");
    console.log(x);
//    console.log(y);
//    console.log(z);