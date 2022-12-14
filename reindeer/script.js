const file = await Deno.readTextFile("data.txt")

const x = file.split("\r\n")

let counter = 1;
let current = 0;

const reindeers = []

x.forEach(element => {
    if(element == ""){
        let reindeer = {
            position:counter,
            calorie:current
        }
        reindeers.push(reindeer)
        counter++;
        current = 0;
    }
    else{
        current += parseInt(element);
    }
});

reindeers.sort((x,y) => (x.calorie > y.calorie) ? -1:1)

// console.log(reindeers)

let sumOfTopThree = reindeers[0].calorie + reindeers[1].calorie + reindeers[2].calorie

console.log(sumOfTopThree)
