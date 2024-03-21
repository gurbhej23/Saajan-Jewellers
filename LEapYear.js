                                        // Write a JavaScript program to find the leap year. 
                                        // Ask the user to input the year using prompt().
function findLeap(year){
    if(year % 4 == 0 && year % 100 !== 0){
      return true;
    } 
    else{
      return false;
    }
}

let year = prompt('Enter a Year')

if( findLeap(year)){
alert("Its's Leap Year")
}
else{
alert("It's Not Leap Year")
}