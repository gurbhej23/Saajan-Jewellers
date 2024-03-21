                            // Write a function to reverse a number. 
                                    // Ex let num = 12345; result should be 54321
function reverseNumber(num) {

    let reversed = 0;
    
    while (num > 0) { //12345
      digit = num % 10; // ex: 12345 % 10 = 5 
      reversed = reversed * 10 + digit; // 0 * 10 + 5 = 5
      num = Math.floor(num / 10); // 12345/10 = 1234.5 = 1234 again repeat
    }
    return reversed;
  } 
  let num = 12345; 
  
  alert(reverseNumber(num)); // Output: 54321