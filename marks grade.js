                        // function to find prime number based on user input
let Prime = prompt('Enter a Prime Number', )

function num(Prime){ 

  for(i = 2; i < Prime; i++){
    if(Prime % i === 0 ){
      return "It's Not Prime"
    }
  }

  return "It's Prime"
}

alert(num(Prime))

