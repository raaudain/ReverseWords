function reverseWords(string){
  // First Attempt
  let reverse = ""

  for (let i of string){
    reverse = i + reverse;
  } 

  const reversed = reverse.split(" ");

  const finalReverse = [];

  for (let i = reversed.length-1; i >= 0; i--){
    finalReverse.push(reversed[i])
  }

  return finalReverse.join(" ");
}

reverseWords("this is a string of words")