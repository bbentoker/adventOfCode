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

data.forEach((el) => {
    let first = el.split(" ")[0];
    let second = el.split(" ")[1];

    let score = 0;
    let ourChoice = null;

    if(second == "X"){
        ourChoice = rules[first]
    }else if(second == "Y"){
        ourChoice = first
        score += 3;
    }else{
        ourChoice = losesTo(first)
        score += 6
    }

    score += points[ourChoice];

    totalScore += score;
});

console.log(totalScore);
