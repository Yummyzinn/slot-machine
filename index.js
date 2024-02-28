// 1. deposit some money
// 2.determine number of lines to bet on
// 3. collect a bet ammount
// 4. spin the slot machine
// 5. check if user won
// 6. give the user their winnings
// 7. play again
const prompt = require('prompt-sync')();

const rows = 3;
const cols = 3;

const symbols_count = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const symbol_values = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}







const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
          console.log("Invalid deposit amount, try again.");
        } else {
          return numberDepositAmount;
        }
      }
}

const getNumberOfLines = () => {
     while(true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ")
    const numberOfLines = parseFloat(lines)

    if (isNaN(numberOfLines) || numberOfLines <= 0  || numberOfLines > 3){
        console.log("invalid nuber of lines, try again")
    }
    else{
        return numberOfLines
    }
  }
}

const getBet = (balance, lines) =>{
    while(true) {
        const bet = prompt("Enter the total bet per line: ")
        const numberBet = parseFloat(bet)
    
        if (isNaN(numberBet) || numberBet <= 0  || numberBet > balance / lines){
            console.log("invalid bet, try again")
        }
        else{
            return numberBet
        }
      }
}

const spin = () =>{
    const symbols = [];
    for (const [symbol, count] of Object.entries(symbols_count)) {
        for(let i = 0; i < count; i++ ){
            symbols.push(symbol);
        }

    }
    const reels = [];
    for (let i = 0; i<cols; i++){
        reels.push([])
        const reelssymbols = [...symbols];
        for(let j =0; j<rows; j++){
            const randomindex = Math.floor( Math.random() * reelssymbols.length)
            const selectedsymbol = reelssymbols[randomindex]
            reels[i].push(selectedsymbol);
            reelssymbols.splice(randomindex, 1)
        }
    }
    return reels;
}
spin()
const reels = spin()
console.log(reels)

let balance = deposit()
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines)
