// 1 number problem solve const/let
var age = 20;
if (age > 18) {
    const name1 = 'akbor';
    let name2 = 'khalel';
    var name3 = 'jaleal';
    // console.log(name1)
    // console.log(name2)
    // console.log(name3)
}
// console.log(name1)
// console.log(name2)
// console.log(name3)
function chang() {
    const name1 = 'akbor';
    let name2 = 'khalel';
    var name3 = 'jaleal';
    // console.log(name1)
    // console.log(name2)
    // console.log(name3)
}
chang()
// console.log(name1)
// console.log(name2)
// console.log(name3)


// let number1 = 30
// number1 = 40
// console.log(number1)
// const number1 = 30
// number1 = 40
// console.log(number1)

// 2 number problem solve  Default parameter
function mustun(nam1, nam2 = 'chacha') {
    const fullName = `${nam1} ${nam2}`;
    return fullName;
}
// console.log(mustun('bangla'));

// 3 number problem solve template string
const firstName = 'kashim'
const lastName = 'mondoal'
let value = 2;
const fullName = `${firstName} ${lastName} ${value * 2}`
console.log(fullName)
// 4 number problem solve arrow function
const numbers = number => number / 100;
console.log(numbers(5))
const add = (num1, num2) => num1 + num2;
const multiply = add(12, 1)
console.log(multiply)

const add9 = (nam1, nam2, nam3) => {
    const sum = nam1 + nam3;
    const diviging = sum / nam2;
    const multiply = sum * diviging;
    return multiply;
}
const result = add9(2, 2, 2)
console.log(result)

