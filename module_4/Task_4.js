let firstArray = [1, 2, 3, 4, 5, 22, -5]

function elementSum(arr) {
    let sum = 0

    for(let x = 0; x < arr.length; x += 1) {
        if(arr[x] > 0 && arr[x] < 10) sum += arr[x]
    }

    return sum
}

console.log(elementSum(firstArray))