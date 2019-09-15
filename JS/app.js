// set searchTerm Genre
document.getElementById("selectGenre").addEventListener("change", e => {
  searchTerm.Genre = e.target.value.toLowerCase();
});

// set searchTerm Type
document.getElementById("searchType").addEventListener("change", e => {
  searchTerm.Type = e.target.value.toLowerCase();
});

// set searchTerm Keyword
document.querySelector("form").addEventListener("submit", e => {
  searchTerm.Keyword = document
    .getElementById("searchField")
    .value.toLowerCase(); // set text input value
  renderResults(); // Search games with defined keyword (set above)
  e.preventDefault(); // Prevent form from submit to avoid page refresh
});

document.getElementById("SavedGamesContainer").addEventListener("click", () => {
  if (document.getElementById("SavedGamesContainerList").style.visibility === 'visible') {
    document.getElementById("SavedGamesContainerList").style.visibility = "hidden"; 
  }

  else {
    buildSavedGameList();
    document.getElementById("SavedGamesContainerList").style.visibility = "visible"; 
  }
});

// if hash (gameid) is already provided, load game page. This allows linking directly to specified game page without searching
window.addEventListener("load", () => {
  if (window.location.href.indexOf("#") != -1) {
    createGamePage(window.location.hash);
  }
  let savedGameCount = getLocalSavedGames();
  document.getElementById("SavedGamesContainer").textContent = `${savedGameCount.length} saved games`;
});