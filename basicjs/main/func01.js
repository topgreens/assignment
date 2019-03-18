class Main {
    execute() {
 // 1. multiply
 function multiply(a, b) {
    let c = a * b;
    console.log("multiply: "+c);
}

multiply(30, 2);

// 2 average
function average(op1, op2, op3, op4) {
    let result = (op1 + op2 + op3 + op4) / 4;
    console.log("average: "+result);
}
average(4, 5, 10, 1); // should be 5


// 3. my favorite song
function myFavoriteSong(song, author) {
    console.log("My favorite song is " + song + " by " + author);
}

//let song = prompt("Type a song of Bobby Marli");
let song = "One Love";

myFavoriteSong(song, "Bob Marley");


// 4.
function add (cats, dogs){
    let m = cats+dogs;
    console.log(m);
}

add (34,4);

// 5 return
function cards(a , b) {
    const name = a;
    const address = b;
    return name+" "+address;
}

let result = cards("john doe", "8 calle juan madrid");

console.log(result);


// Returning examples
function multiply2(a, b) {
    let c = a * b;
    return c;
}
function average(a, b, c, d) {
    return (a+b+c+d)/4;
}
let r = multiply2(3, 3);
let r2 = multiply2(r, 3);
let r3 = multiply2(r2, 3);

let weirdresult = average(r, r2, r3, 1);
console.log(weirdresult)
    }
}
new Main().execute();