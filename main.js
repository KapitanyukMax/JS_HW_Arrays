Task1();

function Task1() {
    let arr = [];
    for (let i = 0; i < 20; i++)
        arr.push(Math.floor(Math.random() * 100) + 1);
    
    console.log(arr);
}