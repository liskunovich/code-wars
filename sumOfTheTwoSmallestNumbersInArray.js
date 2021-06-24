function sumTwoSmallestNumbers(numbers) {

    let firstMinNumber = Math.min(...numbers)
    numbers.splice(numbers.indexOf(firstMinNumber), 1)
    let secondMinNumber = Math.min(...numbers)
    return firstMinNumber + secondMinNumber
}

console.log(sumTwoSmallestNumbers([5, 8, 5, 12, 19, 22]))