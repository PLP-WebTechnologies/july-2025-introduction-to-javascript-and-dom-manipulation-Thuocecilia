

let number = 15;
const customerName = "Alice";
var age = 17;

//Check if number is even or odd
if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

//Check if eligible for a discount
if (age >= 18) {
    console.log(customerName + " is eligible for a discount.");
} else {
    console.log(customerName + " is not eligible for a discount.");
}
//  Functions
function cube(num) {
    return num * num * num;
}
console.log("Cube of 4 is: " + cube(4));

// message
function welcomeUser(username) {
    return "Welcome, " + username + "! Enjoy your stay.";
}
console.log(welcomeUser("Charlie"));


//  Loops
for (let i = 1; i <= 10; i++) {
    console.log("3 x " + i + " = " + (3 * i));
}

// While loop 
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}


// Change text content of heading
document.getElementById("main-heading").innerText = "Learning JavaScript Step by Step";

// Toggle background color on button click
document.getElementById("colorBtn").addEventListener("click", function() {
    if (document.body.style.backgroundColor === "lightyellow") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightyellow";
    }
});

// 3. Show custom message on button click
document.getElementById("messageBtn").addEventListener("click", function() {
    document.getElementById("info-text").innerText = "Button clicked! JavaScript is fun!";
});
