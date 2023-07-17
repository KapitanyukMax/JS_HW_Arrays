//1
let arr = [];
for (let i = 0; i < 20; i++)
    arr.push(Math.floor(Math.random() * 100) + 1);

//2
for (const index in arr)
    console.log(`[${+index + 1}] - ${arr[index]}`);

//3
let multiplesOf7 = arr.filter(elem => elem % 7 === 0);
multiplesOf7.length === 0 ? console.log("There are no multiples of 7 in the array")
    : console.log(`Multiples of 7: ${multiplesOf7}`);

//4
arr.sort((a, b) => b - a);
console.log(`Ordered by descending array: ${arr}`);