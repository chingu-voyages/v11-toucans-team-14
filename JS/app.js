document.querySelector("button").addEventListener("click", () => {
  const searchTerm = document.getElementById("searchField").value;
  renderResults(searchTerm);
});
