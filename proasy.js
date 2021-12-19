let stocks = {
  Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid : ["water", "ice"],
  Holder : ["cone","cup","stick"],
  Toppings : ["chocolate", "peanuts"]
};

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
 console.log("Which topping would you love? ")
      );
    }, 3000);
  });
};

async function kitchen(){
  console.log("A");
   console.log("B");
    console.log("C");
     console.log("D");
     await toppings_choice();
      console.log("E");
       console.log("F");
}
kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
