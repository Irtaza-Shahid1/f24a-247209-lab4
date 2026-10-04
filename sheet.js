let rows = [];

const form = document.getElementById("sheet-form");
const itemBox = document.getElementById("item");
const quantityBox = document.getElementById("quantity");
const priceBox = document.getElementById("price");
const rowsBody = document.getElementById("rows");
const totalBox = document.getElementById("total");
const totalKindBox = document.getElementById("total-kind");
const noteKindBox = document.getElementById("note-kind");
const priceMatchBox = document.getElementById("price-match");
const priceSameKindBox = document.getElementById("price-same-kind");
const nanKindLine = document.getElementById("nan-kind-line");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let row = {
    quantity: quantityBox.value,
    price: priceBox.value
  };
  if (itemBox.value !== "") {
    row.item = itemBox.value;
  }

  row.line = row.quantity * row.price;
  row.note = row.price + row.quantity;
  rows.push(row);
  drawRows();
  drawDetails(row);

  itemBox.value = "";
  quantityBox.value = "";
  priceBox.value = "";
});

function drawRows() {
  rowsBody.innerHTML = "";
  for (let row of rows) {
    rowsBody.innerHTML += `<tr><td>${row.item}</td><td>${row.quantity}</td><td>${row.price}</td><td>${row.line}</td><td>${row.note}</td></tr>`;
  }
}

function drawDetails(lastRow) {
  let total = 0;
  for (let row of rows) {
    if (!Number.isNaN(row.line)) {
      total = total + row.line;
    }
  }

  totalBox.textContent = total;
  totalKindBox.textContent = typeof total;
  noteKindBox.textContent = typeof lastRow.note;
  priceMatchBox.textContent = lastRow.price == Number(lastRow.price);
  priceSameKindBox.textContent = lastRow.price === Number(lastRow.price);

  if (Number.isNaN(lastRow.line)) {
    nanKindLine.textContent = "Kind of NaN Line: " + typeof lastRow.line;
  } else {
    nanKindLine.textContent = "";
  }
}
