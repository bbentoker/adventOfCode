const file = await Deno.readTextFile("data.txt");

const data = file.split("\r\n");
data.pop();

const dict = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "10",
    k: "11",
    l: "12",
    m: "13",
    n: "14",
    o: "15",
    p: "16",
    q: "17",
    r: "18",
    s: "19",
    t: "20",
    u: "21",
    v: "22",
    w: "23",
    x: "24",
    y: "25",
    z: "26",
    A: "27",
    B: "28",
    C: "29",
    D: "30",
    E: "31",
    F: "32",
    G: "33",
    H: "34",
    I: "35",
    J: "36",
    K: "37",
    L: "38",
    M: "39",
    N: "40",
    O: "41",
    P: "42",
    Q: "43",
    R: "44",
    S: "45",
    T: "46",
    U: "47",
    V: "48",
    W: "49",
    X: "50",
    Y: "51",
    Z: "52",
};

let sum = 0;
const groupCount = data.length / 3;

for(let i = 0;i<groupCount;i++){
    let first = data[(i*3)]
    let second = data[(i*3)+1]
    let third = data[(i*3)+2]
    
    let duplicate = findDuplicate(first,second,third);

    sum += parseInt(dict[duplicate])
}

console.log(sum)

function findDuplicate(firstLine,secondLine,thirdLine) {
    let first = firstLine.split("");
    let second = secondLine.split("");
    let third = thirdLine.split("");

    let duplicate = null

    first.forEach((el) => {
        if (second.includes(el) && third.includes(el)) {
            duplicate = el;
        }
    })

    return duplicate;
}