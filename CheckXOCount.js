function XO(str) {
    let xCount = 0
    let oCount = 0
    str.toLowerCase().split('').forEach(letter => letter === 'x' ? xCount++ : letter === 'o' ? oCount++ : false)
    return xCount === oCount
}

console.log(XO('xxfsdoo'))