const vowels = ["a", "e", "i", "o", "u"];

const countVowels = (str) => {
  let vowelNumber = 0
    for (let i = 0; i < str.length; i++){

        for (let v = 0; v < vowels.length; v++){

          if (str[i] === vowels[v]){
              vowelNumber++
          }
        }
        }
 return vowelNumber
    }

    const string = prompt('Please enter your message: ');

    let editedString = string.toLowerCase();

    console.log(`The number of vowels is ${countVowels(editedString)}`);
