let score = 0;
const button = document.getElementById("button")

const diceRoll = () => {
     Math.floor(Math.random)*6 + 1;
 }

 let result = score += diceRoll;   
button.addEventListener (click, () => {

    if (result == 1) {
        console.log("You have lost the game")
        
        }else if (result > 1 && result < 20) {
            console.log ("Congratulations! You have won")
           
        }else { 
            console.log("Roll the dice again")

            }
            button.addEventListener('click', );
        })
