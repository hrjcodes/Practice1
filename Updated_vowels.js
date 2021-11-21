const vowels = ["a", "e", "i", "o", "u"];

const string = prompt('Please enter your message: ');

let editedString = string.toLowerCase();
let vowelNumber = 0
const countVowels = () => {
    for (let i = 0; i < editedString.length; i++){

        for (let v = 0; v < vowels.length; v++){

          if (editedString[i] === vowels[v]){
              vowelNumber++
          }
        }
        }
 return vowelNumber
    }
    console.log(`The number of vowels is ${countVowels(string)}`);
    
