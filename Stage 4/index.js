console.log(`The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money`);

const input = require('sync-input');
let write = input("Write action (buy, fill, take:)");
if(write==="buy"){
    let choose= Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:"));
    switch(choose){
        case 1:
            console.log(`The coffee machine has:
      150 ml of water
      540 ml of milk
      104 g of coffee beans
      8 disposable cups
      $554 of money`);
            break
        case 2:
            console.log(`The coffee machine has:
      50 ml of water
      465 ml of milk
      100 g of coffee beans
      8 disposable cups
      $557 of money`);
            break
        case 3:
            console.log(`The coffee machine has:
      200 ml of water
      440 ml of milk
      108 g of coffee beans
      8 disposable cups
      $556 of money`);
            break
    }
}
else if(write ==="fill"){
    let howManyWater = Number(input("Write how many ml of water you want to add:"));
    let howManyMilk = Number(input("Write how many ml of milk you want to add:"));
    let howManyCoffee = Number(input("Write how many grams of coffee beans you want to add:"));
    let howManyCups = Number(input("Write how many disposable coffee cups you want to add:"));

    let totalWater = howManyWater + 400;
    let totalMilk = howManyMilk + 540;
    let totalCoffee = howManyCoffee + 120;
    let totalCups = howManyCups + 9;

    console.log(`The coffee machine has:
  ${totalWater} ml of water
  ${totalMilk} ml of milk
  ${totalCoffee} g of coffee beans
  ${totalCups} disposable cups
  $550 of money`)
}
else if(write === "take"){
    console.log(`I gave you $550

The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$0 of money
`)
}