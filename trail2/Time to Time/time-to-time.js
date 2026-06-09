const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

const start = a * 60 + b;
const end = c * 60 + d;

console.log(end - start);
