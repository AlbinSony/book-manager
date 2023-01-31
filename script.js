let selectRow = null;

function onFormSubmit() {
  let formData = readFormData();
  if (selectRow == null) insertNewRecord(formData);
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["author"] = document.getElementById("author").value;
  return formData;
}
function insertNewRecord(data) {
  let table = document
    .getElementById("bookList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.author;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("author").value = "";
  selectRow = null;
}

function onDelete(td) {
  if (confirm("Are you want to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("bookList").deleteRow(row.rowIndex);
    resetForm();
  }
}
