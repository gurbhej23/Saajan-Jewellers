                         // function to login user based on their name

let Name = prompt('Enter a Name')
let Pass = prompt('Enter a Password')

function user(Name,Pass){
  if(Name == 'TheAdmin' && Pass == 'Master') {
    return 'Welcome';
  } else if(Name == '' || Name == 'null' && Pass == '' || Pass == 'null') {
    return 'Incorrect';
  } else {
    return 'Failed';
  }
}

alert(user(Name,Pass))
