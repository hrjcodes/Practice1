
let lotteryNumber = 0;
for (let counter = 1; counter < 7; counter++) {
  lotteryNumber = Math.floor(Math.random() * 50);
  console.log(`Lottery number ${counter} is ${lotteryNumber}`);
}




