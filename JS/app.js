// function runs when form is being submit, using button or pressing enter

document.querySelector("form").addEventListener("submit", (e) => {
  const searchTerm = document.getElementById("searchField").value; // get text input value
  renderResults(searchTerm.toLowerCase()); // Convert to lowercase to ignore case sensitive
  e.preventDefault(); // Prevent form from submit to avoid page refresh
});