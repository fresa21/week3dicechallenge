const button = document.getElementById("button")
let score = 0;
let result = document.getElementById("result")

button.addEventListener ("click", () => {
    
        let roll = Math.floor(Math.random)*6 + 1;
         score += roll;

    if (roll == 1) {
        result.textContent = `${result}You have lost the game`;
        
        }else if (score >= 20) {
            result.textContent = `${result}Congratulations! You have won`;
            
        }else { 
            result.textContent = `${result} Roll the dice again`;

            }
            button.addEventListener('click',roll());
        })
