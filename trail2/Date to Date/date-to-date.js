const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let start_date = 0
for (let i = 1; i < m1; i++) {
    start_date += num_of_days[i]
}
start_date += d1

let end_date = 0
for (let i = 1; i < m2; i++) {
    end_date += num_of_days[i]
}
end_date += d2

console.log(end_date - start_date + 1);