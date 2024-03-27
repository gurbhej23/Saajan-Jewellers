                // Calculate the sum of numbers in an array of numbers. Ex. let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95]; let sum = sumArray(ar);

let arr =[2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(arr);

function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum
}

console.log(sum)