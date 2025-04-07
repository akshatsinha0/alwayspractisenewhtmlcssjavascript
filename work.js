console.log("Script.js initializing...");
let boxes = document.querySelector(".container").children;

function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
});

// Random number between 24 and 777 (exclusive)
let min = 24;
let max = 777;
let val = Math.floor(min + 1 + Math.random() * (max - min - 1));
console.log("Random value between 24 and 777 (exclusive):", val);

// Background color for child container
setInterval(() => {
    document.querySelector(".child-container").style.backgroundColor = getRandomColor();
}, 1000);

// Factorial Function
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1).reduce((a, b) => a * b, 1);
    return c;
}
let a = 6;
console.log("Factorial of", a, "is", factorial(a));


