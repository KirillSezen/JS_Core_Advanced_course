function checkArray(arr) {
    if (arr.length === 0) {
        throw new Error("Массив пуст");
    }
    return arr;
}

try {
    const nonEmptyArray = [1, 2, 3];
    checkArray(nonEmptyArray);
    console.log("Массив не пуст");
    
    const emptyArray = [];
    checkArray(emptyArray);
} catch (error) {
    console.error(error.message);
}