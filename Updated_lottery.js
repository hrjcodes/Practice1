const lotteryNumbers = [];
let generateNumber = 0

const getLottery = (amount, range) => {

for (let counter = 0; counter < range; counter++) {
  generateNumber = Math.floor(Math.random() * amount) + 1;
  lotteryNumbers.push(generateNumber);
}
}

 const printLottery = (range) => {

    for (let counter = 0; counter < range; counter++) {
       console.log(`Lottery number ${counter + 1} is ${lotteryNumbers[counter]}`);
   }
 }

let value = prompt('Please enter the maximum value of lottery number to calculate');
let numbers = prompt('PLease specify how many lottery numbers to calculate ');

getLottery(value, numbers);

printLottery(lotteryNumbers.length);
