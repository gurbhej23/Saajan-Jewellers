                            // Write a javascript program to find duplicate values in array. 
                                    // Ex. let arr = [23,26,22,45,1,22,33]
let arr = [23,26,22,45,1,22,33]
let result = arr.filter((val,index,self)=>{
  return self.indexOf(val) !== index;
})

console.log( result )