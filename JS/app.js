// function runs when form is being submit, using button or pressing enter


document.querySelector("form").addEventListener("submit", (e) => {
  searchTerm.Keyword = document.getElementById("searchField").value.toLowerCase(); // set text input value
  renderResults(searchTerm.Keyword); // Convert to lowercase to ignore case sensitive
  e.preventDefault(); // Prevent form from submit to avoid page refresh
});