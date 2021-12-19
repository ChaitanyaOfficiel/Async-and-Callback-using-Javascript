let stocks = {
  Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  Liquid : ["water", "ice"],
  Holder : ["cone","cup","stick"],
  Toppings : ["chocolate", "peanuts"]
};

let is_shop_open = true;

function time(ms){
  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(resolve, ms)
    }else{
      reject(console.log("shop is closed"));
    }
  })
}

async function kitchen(){
  try{
    await time(2000)
    console.log(`${stocks.Fruits[2]}`)

    await time(0000)
    console.log("The production is started")

    await time(2000)
    console.log("The fruits are chopped")

    await time(1000)
    console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are added`)

    await time(1000)
    console.log("The machine is started")

    await time(2000)
    console.log(`${stocks.Holder[1]} was added`)

    await time(3000)
    console.log(`${stocks.Toppings[0]} was added`)

    await time(2000)
    console.log("The Ice cream is served")
  }
  catch(error){
    console.log(
      "customer left",error
    )
  }
  finally{
    console.log(" day ended, shop is closed ")
  }
}
kitchen();