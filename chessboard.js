var chessfield = "";
var size = 8;
for(var rowcount = 1; rowcount<=size; rowcount++){
  for (var sign=1; sign<=size; sign++){
    if (rowcount%2 == 0) {
      if(sign%2 == 0) chessfield += " ";
      else chessfield += "#";
    }
    else {
      if(sign%2 == 0) chessfield += "#";
      else chessfield += " ";
    }
  }
  chessfield += "\n";
}
console.log(chessfield);
