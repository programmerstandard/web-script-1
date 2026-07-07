window.onload = function () {
  document.getElementById("radioButtonName").checked = true;
};

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  var radioButtons;
  var indexFilter;

  radioButtons = document.getElementsByName("filter");
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  indexFilter = 0;
  if (radioButtons[1].checked == true) {
    indexFilter = 1;
  }

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[indexFilter];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function changeFilter() {
  var radioButtons, input;
  radioButtons = document.getElementsByName("filter");
  input = document.getElementById("myInput");

  if (radioButtons[1].checked) {
    input.placeholder = "Search for country...";
  } else {
    input.placeholder = "Search for names...";
  }
}
