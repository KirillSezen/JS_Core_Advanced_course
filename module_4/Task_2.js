function variables() {
    var x = 1
    let y = 2
    const z = 3

    console.log(x)
    console.log(y)
    console.log(z)
}

variables()
console.log(x) // Ошибка: x is not defined
console.log(y) // Ошибка: y is not defined
console.log(z) // Ошибка: z is not defined