let people = [{ name: "Shopkeeper" }];

const nameBox = document.getElementById("person-name");
const hereButton = document.getElementById("here");
const outButton = document.getElementById("out");
const peopleBody = document.getElementById("people");
const countBox = document.getElementById("count");

hereButton.addEventListener("click", function () {
  people.push({ name: nameBox.value, inShop: true });
  nameBox.value = "";
});

outButton.addEventListener("click", function () {
  people.push({ name: nameBox.value, inShop: false });
  nameBox.value = "";
});

function drawPeople() {
  peopleBody.innerHTML = "";
  let count = 0;

  for (let person of people) {
    peopleBody.innerHTML += `<tr><td>${person.name}</td><td>${person.inShop}</td></tr>`;
    if (person.inShop === true) {
      count = count + 1;
    }
  }

  countBox.textContent = count;
}

hereButton.addEventListener("click", drawPeople);
outButton.addEventListener("click", drawPeople);

drawPeople();
