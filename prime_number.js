/**
 * Implement the solution in this function
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
function isPrime (n) {
    if(n<2){
        return false;
    }
    for(let i=2;i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

let result = isPrime(13);
console.log(result);
result = isPrime(8);
console.log(result);