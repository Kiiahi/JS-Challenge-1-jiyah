jS-Challenge-1-jiyah\script.js

const userName = prompt("What is your name?");
const user = {
    name: userName,
    first: 0, 
    wrongs: 0, 
};

localStorage.setIten("user", JSON.stringify(user));

const names = [];
for (Let i = 0; i < 7; i++) {
  const name = prompt(`Enter name ${i + 1}:`);
  names.push(name);
}

const randomNumber = Math.floor(Math.random() * 7);

const nameListDiv = document .getElementById("nameList");
names.forEach((name) => {
    const nameElement = document.createElement("p");
    nameElemenr.textContent = name;
    nameListDiv.appendChild(nameElement);
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const guess = parseInt(document.getElementById("guess-Input").value, 10);

    if (guess === randomNumber) {
        alert ("What a Cawinkydicnk! You got it right!");

        const storedUser = JSON.parse(localStorage.getItem('user'));
        storedUser.wrongs += 1;
        lacalStorage.setItem("user", JSON.stringify(storedUser));

    }
});
