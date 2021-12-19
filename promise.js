// Promises in JavaScripts
// let stocks = {
//   Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
//   Liquid : ["water", "ice"],
//   Holder : ["cone","cup","stick"],
//   Toppings : ["chocolate", "peanuts"]
// }

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if(is_shop_open){
//       setTimeout(() => {
//          resolve(  work() )
//       }, time)
     
//     }else{
//       reject(
//         console.log('Our shop is closed')
//       )
//     }
//   })
// }
// order(2000, ()=>console.log(`${stocks.Fruits[1]} was selected`))
// .then(()=>{
//   return order(0000, ()=>console.log("Production has started"));
// }).then(() => {
//   return order(2000, ()=>console.log("The fruit was Chopped"));
// }).then(() => {
//   return order(1000, ()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added on Ice Cream`));
// }).then(() => {
//   return order(1000, ()=>console.log("The Machine is Started"));
// }).then(() => {
//   return order(2000, ()=>console.log(`${stocks.Holder[0]}was selected`));
// }).then(() => {
//   return order(3000, ()=>console.log(`${stocks.Toppings[0]}
//   was selected
//   `));
// }).then(() => {
//   return order(2000, ()=>console.log("The Ice Cream is served"));
// }).catch(() => {
//   console.log("customer left");
// })
// .finally(() => {
//   console.log("day ended, shop is closed");
// })