                        // function to find odd/even number based on user input
let OddEven = prompt('Enter a Number To Check Odd/Even', )

function Num(OddEven){
    for(i = 0; i < OddEven; i++){
    if(OddEven % 2  == 0){
        return true;
    } else{ 
        return false;
    }
    }
}

if(Num(OddEven)){
    alert('its Even')
} else {
    alert('its Odd')
}