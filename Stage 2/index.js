console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`)
const input = require('sync-input');
function howManyCups(){
    let cups = Number(input("Write how many cups of coffee you will need:"));
    console.log(`For ${cups} cups of coffee you will need:`)
    let water = 200 * cups;
    let milk = 50 * cups;
    let coffee = 15 * cups;
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffee} g of coffee beans`);
}

howManyCups()