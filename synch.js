//synchoronus

console.log("I");
console.log("am ");
setTimeout(() => {
  console.log("going to");
}, 4000);
console.log("Work ");


callback function
function one(call_two){
   call_two();
  console.log(" step One complete. please call step 2 ");
 
}
function two(){
 
  console.log(" step two ")
}
one(two);
stock for ice cream
