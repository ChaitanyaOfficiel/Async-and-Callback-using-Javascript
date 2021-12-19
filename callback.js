// let stocks = {
//   Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
//   Liquid : ["water", "ice"],
//   Holder : ["cone","cup","stick"],
//   Toppings : ["chocolate", "peanuts"]
// }
// // console.log(stocks.Fruits[2])

// let order = (Fruit_name,call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//     call_production();
//   }, 
  
//   2000);
  
  
// }

// let production = () => {
//   setTimeout(() => {
//     console.log('Production has started')
//     setTimeout(() => {
//         console.log("The fruit has been chopped")
//       setTimeout(() => {
//         console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected
//         `)
//         setTimeout(() => {
//           console.log("The machine started")
//           setTimeout(() => {
//     console.log(`ice cream was placed on ${stocks.Holder[1]} `)
//   }, 2000);
//       setTimeout(() => {
//           console.log(`${stocks.Toppings[0]} topping was added on Ice cream`)
//           setTimeout(() => {
//             console.log("Ice cream is Served")
//           },2000)
//       },3000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000)
// }
// order(0,production,1);