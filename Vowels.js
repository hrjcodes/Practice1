let input = 'You can enter your message here to be checked';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = 0;
for (let i = 0; i < input.length; i++){
   
for (let v = 0; v < vowels.length; v++){
  
  if (input[i] === vowels[v]){
      resultArray++
  }
}
}


console.log(`Number of vowels was ${resultArray}`);
