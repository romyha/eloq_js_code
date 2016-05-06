function range(start, end){
  var numbers = [];
  if (arguments.length>2){
    if(arguments[2]<0)
      for (var i=start; i>=end; i+=arguments[2]){
        numbers.push(i);
      }
    else for (var i=start; i<=end; i+=arguments[2]){
           numbers.push(i);
         }
  }
  else
    for (var i=start; i<=end; i++){
      numbers.push(i);
    }
  return numbers;
}

function sum(numArray){
  var sum = 0;
 // for(var num in numArray){
  for(var i=0; i<numArray.length; i++){
    sum += i;
  }
  return sum;
}



console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(2, 5, 1));
console.log(sum(range(1, 10)));
console.log(range(1, 10).length);
