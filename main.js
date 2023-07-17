//1
let arr = [];
for (let i = 0; i < 20; i++)
    arr.push(Math.floor(Math.random() * 100) + 1);

//2
for (const index in arr)
    console.log(`[${+index + 1}] - ${arr[index]}`);