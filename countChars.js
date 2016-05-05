function countBs(str){
  var num = 0;
  for(var pos = 0; pos<str.length; pos++){
    if(str.charAt(pos) == "B") num++;
  }
  return num;
}
  
function countChar(str, char){
  var num = 0;
  for(var pos = 0; pos<str.length; pos++){
    if(str.charAt(pos) == char) num++;
  }
  return num;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
