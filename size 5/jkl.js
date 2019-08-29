let size = 5;
let result = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
        result += 'X';
    }
    result += '\n';
}

console.log(result);