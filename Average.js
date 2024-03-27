                                // Calculate the average of the numbers in an array of numbers. 
                            //Ex: let ar = [1, 3, 9, 15, 90]; let avg = averageArray(ar);
let ar = [1, 3, 9, 15, 90]; 
let avg = averageArray(ar);

function averageArray(ar){
    let sum =0;

    for(let i = 0; i < ar.length; i++){ 
        sum += ar[i] 
    }
    average = sum/ar.length 
    return average
}

console.log(averageArray(ar))