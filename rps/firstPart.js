const file = await Deno.readTextFile("data.txt");

const data = file.split("\r\n");

const rules1 = {
    X: "C",
    Y: "A",
    Z: "B",
};

const rules2 = {
    X: "A",
    Y: "B",
    Z: "C",
};

const rules3 = {
    X: 1,
    Y: 2,
    Z: 3,
};
data.pop();

let totalScore = 0;

data.forEach((el) => {
    let first = el.split(" ")[0];
    let second = el.split(" ")[1];

    let score = 0;

    if (rules1[second] == first) {
        score += 6;
    } else if (rules2[second] == first) {
        score += 3;
    }

    score += rules3[second];

    totalScore += score;
});

console.log(totalScore);
