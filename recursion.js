function isEven(number){
  if (number<0) number *= -1;
  if (number == 0) return true;
  else if (number == 1) return false;
  else return isEven(number-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
