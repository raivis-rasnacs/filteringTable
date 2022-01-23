function filterBy(id) {
  showAllRows();
  param = document.getElementById(id).value;
  var rows = document.getElementById("data-list").rows;
  for (var i = 2; i < rows.length; i++) {
    if (id == "name") { var data = rows[i].firstElementChild.innerHTML; }
    if (id == "year") { var data = rows[i].children[1].innerHTML; }
    if (id == "origin") { var data = rows[i].children[2].innerHTML; }
    if (data.slice(0, param.length) != param) {
      rows[i].style.visibility = "hidden";
    }
  }
}

function showAllRows() {
  var rows = document.getElementById("data-list").rows;
  for (var i = 2; i < rows.length; i++) {
    rows[i].style.visibility = "visible";
  }
}