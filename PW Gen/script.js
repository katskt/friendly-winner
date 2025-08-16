const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("pw1");
let password2El = document.getElementById("pw2");
let isCopiedMessageEl = document.getElementById("isCopiedMessage");
let isGenerated = false;
function generatePassword() {
    isGenerated = true;
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < 15; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }
    password1El.textContent = password1;
    password2El.textContent = password2;
    isCopiedMessageEl.textContent= "";
}

function copyText1() {
    if (isGenerated === false) {
        return;
    }
    let copyText = password1El.textContent;

    navigator.clipboard.writeText(copyText)

    displayCopiedMessage();
}

function copyText2() {
    if (isGenerated === false) {
        return;
    }
    let copyText = password2El.textContent;

    navigator.clipboard.writeText(copyText)

    displayCopiedMessage();
}


function displayCopiedMessage() {
    isCopiedMessageEl.textContent = "Copied Password!"
}
/* function copyText1() {
    let copyText = document.getElementById()
} */

/* let avg = 0;
let k = 0;
let trials = 10;
for (let i = 0; i < trials; i++) {
    k = Math.floor(Math.random() * 6) + 1;
    avg += k; 
}
avg /= trials;
console.log(avg); */