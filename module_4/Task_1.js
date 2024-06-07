'use strict'

let firstArray = [1, 2, 3, 4, 5]
let secondArray = [1, 3, 4, 2, 9, 9, 3, 0]

function checkDuplicates(array) {
    for(let x = 0; x < array.length; x += 1){
        for(let y = x+1; y < array.length; y += 1){
            if (array[x] == array[y]) return true
        }
    }
    return false
}

console.log(checkDuplicates(firstArray))
console.log(checkDuplicates(secondArray))