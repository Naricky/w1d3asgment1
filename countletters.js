var array = process.argv.slice(2);
var newString = ""

for (x = 0 ; x < array.length; x++){
  newString += array[x];
}

newString = newString.toLowerCase();
newString = newString.split(" ").join("");
var object = {}

function countLetters(newString){

for ( i = 0 ; i < newString.length ; i++)


  if (!object[newString[i]]) {
  object[newString[i]]=1;
  }
  var array = process.argv.slice(2);
var newString = ""

for (x = 0 ; x < array.length; x++){
  newString += array[x];
}

newString = newString.toLowerCase();
newString = newString.split(" ").join("");
var object = {}

function countLetters(newString){

for ( i = 0 ; i < newString.length ; i++)


  if (!object[newString[i]]) {
  object[newString[i]]=1;
  }
  else {
  object[newString[i]] += 1
  }

return object;


}

console.log(countLetters(newString))


  }

return object;


}

console.log(countLetters(newString))











