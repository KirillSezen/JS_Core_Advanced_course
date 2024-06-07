function countDigits(number) {
    if(String(Math.floor(number)).length < String(number).length) return String(number).length-1
    return String(number).length;
}

console.log(countDigits(12345.123));
console.log(countDigits(0));
console.log(countDigits(9876543210));