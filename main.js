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
let sorted = arr.slice();
sorted.sort((a, b) => b - a);
console.log(`Ordered by descending array: ${sorted}`);

//5
console.log(`Changed array: ${arr.slice(0, 10).concat(arr.slice(10).map(() => 0))}`);

//6
let splicedArr = arr.slice();
splicedArr.splice(0, 3);
console.log(`Array without first 3 elements: ${splicedArr}`);

//7
let isUnique = true;
let uniqueArr = [];
for (const elem of arr) {
    if (uniqueArr.includes(elem)) {
        isUnique = false;
        break;
    }
    else
        uniqueArr.push(elem);
}

isUnique ? console.log("The array does not contain duplicate elements")
    : console.log("The array contains duplicate elements");

//8
let halfArr = arr.splice(10);
console.log(`The second half of the array: ${halfArr}`);