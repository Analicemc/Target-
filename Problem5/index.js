let string = "Analice";
let newStr = '';

for (let index = (string.length - 1); newStr.length < string.length; index--) {
    newStr = newStr + string[index];
}

console.log(newStr);