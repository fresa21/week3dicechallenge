
document.addEventListener("keydown", (event) => {
    
    let numDisplay = document.getElementById("numDisplay");
    let numCode = document.getElementById("codeDisplay");
    let numKey = document.getElementById("keyDisplay");
    let numWhich  = document.getElementById("whichDisplay");
    
    let keyDown = event.key;
    let keyCode = event.code;
    let keyWhich = event.which;
  
  numDisplay.innerHTML = `<p class="pressedBtn"> ${keyDown} was pressed</p>`
  numKey.innerHTML = `<p class="pressedBtn"> ${event.key} was pressed</p>`
  numCode.innerHTML = `<p class="pressedBtn"> ${event.code} was pressed</p>`
  numWhich.innerHTML = `<p class="pressedBtn"> ${event.which} was pressed</p>`
  })
// }
// for (i=0; i< length; i++) {
//   if (numDisplay = document.getElementById("numDisplay"))
//   console.log(Math.floor(Math.random*50)+1);
    
// }else if{ 
//     (numCode = document.getElementById("codeDisplay"))
//     console.log(Math.floor(Math.random*50)+1)
    
//   } else if{ (numKey = document.getElementById("keyDisplay"))
//       console.log(Math.floor(Math.random*50)+1);
     
//     }else{  (numWhich  = document.getElementById("whichDisplay"))
//      console.log(Math.floor(Math.random*50)+1);
//     }
  
 




