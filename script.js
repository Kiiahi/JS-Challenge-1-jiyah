
const userName = prompt("What is your name?");
const user = {
    name: userName,
    first: 0, 
    wrongs: 0, 
};

localStorage.setItem("user", JSON.stringify(user));

const names = [];
for (let i = 0; i < 7; i++) {
  const name = prompt(`Enter name ${i + 1}:`);
  names.push(name);
}

const randomNumber = Math.floor(Math.random() * 7);

const nameListDiv = document .getElementById("name-list");
names.forEach((name) => {
    const nameElement = document.createElement("p");
    nameElement.textContent = name;
    nameListDiv.appendChild(nameElement);
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const guessInput = document.getElementById("guess-input").value;
    const guess = parseInt(guessInput, 10);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6.");
        return;
    }
     
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (guess === randomNumber) {
        alert ("What a Cawinkydicnk! You got it right!");
        storedUser.first += 1;
    } else {
        alert("LOSER! Try again!");
        storedUser.wrongs += 1;
    }
        
        localStorage.setItem("user", JSON.stringify(storedUser));

    });
