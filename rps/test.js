const file = await Deno.readTextFile("data.txt");

const data = file.split("\r\n");

const points = {
    A: 1,
    B: 2,
    C: 3,
};

const rules = {
    B: "A",
    C: "B",
    A: "C",
};

data.pop();

let totalScore = 0;

function losesTo(choice){
    return Object.keys(rules).find(key => rules[key] == choice)
}


console.log(losesTo("B"))