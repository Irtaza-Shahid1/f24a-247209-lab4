const form = document.getElementById("till-form");
const billBox = document.getElementById("bill");
const paidBox = document.getElementById("paid");
const result = document.getElementById("till-result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let bill = Number(billBox.value);
  let paid;
  if (paidBox.value === "") {
    paid = null;
  } else {
    paid = Number(paidBox.value);
  }
  let change = getChange(paid, bill);

  let text = `<p>Change: ${change}</p><p>Kind of paid: ${typeof paid}</p>`;
  if (bill > paid) {
    text += `<p>Still owed: ${bill - paid}</p>`;
  }
  if (paid > bill) {
    text += `<p>Half of change: ${change / 2}</p>`;
  }
  result.innerHTML = text;

  function getChange(paidAmount, billAmount) {
    return paidAmount - billAmount;
  }
});
