                // Calculate the sum of odd numbers greater than 10 and less than 30
// 11 + 13 + 15 + 17 + 19 + 21 + 23 + 25 + 27 + 29 = 200
let sum = 0;

function oddNum(sum){
     
    for(i = 11; i <= 30; i+=2){ 
        sum += i;
    }
    return sum
}

console.log(oddNum(sum))
