console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`)
const input = require('sync-input');

function howManyCups(){
    let howManyWater = Number(input("Write how many ml of water the coffee machine has"));
    let howManyMilk = Number(input("Write how many ml of milk the coffee machine has"));
    let howManyCoffee = Number(input("Write how many grams of coffee beans the coffee machine has:"));
    let totalWater = howManyWater / 200;
    let totalMilk = howManyMilk / 50;
    let totalCoffee = howManyCoffee / 15;
    let total = Math.min(totalWater,totalMilk,totalCoffee);
    let totalFloor = Math.floor(total);
    let cups = Number(input("Write how many cups of coffee you will need:"));
    let water = 200 * cups;
    let milk = 50 * cups;
    let coffee = 15 * cups;
    if (howManyWater >= water && howManyMilk >= milk && howManyCoffee >= coffee){
        let fark= totalFloor-cups;
        if(totalFloor > cups){
            console.log(`Yes, I can make that amount of coffee (and even ${fark} more than that)`);
        }
        else if (totalFloor ===cups){
            console.log(`Yes, I can make that amount of coffee`);
        }
    }
    else{
        console.log(`No, I can make only ${totalFloor} cups of coffee`);
    }

}

howManyCups()