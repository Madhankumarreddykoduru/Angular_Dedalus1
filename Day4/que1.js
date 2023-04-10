function primenumber(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
numbers = [23,12,34,67,54,89,76,1,3,5];
primenumbers = numbers.filter(primenumber);
console.log(primenumbers);