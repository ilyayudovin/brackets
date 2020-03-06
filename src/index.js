module.exports = function check(str, bracketsConfig) {
    function same( left, right ) {
        return ( left === '(' && right === ')' || left === '[' && right === ']'
            || left === '{' && right === '}' || left === '|' && right === '|'
            || left === '1' && right === '2' || left === '3' && right === '4'
            || left === '5' && right === '6' || left === '7' && right === '7'
            || left === '8' && right === '8')

    }
    let mas = str.split("");
    for (let i=0; i < mas.length; i++) {
        if (same(mas[i],mas[i + 1])) {
            mas.splice(i, 2);
            i = i - 2;
        }
    }
    if (mas.length === 0 ) {
        return true
    } else {
        return false
    }
}
