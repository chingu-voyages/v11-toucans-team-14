// Set searchTerm Genre
document.getElementById("selectGenre").addEventListener("change", e => {
  searchTerm.Genre = e.target.value.toLowerCase();
});

// Set searchTerm Type
document.getElementById("searchType").addEventListener("change", e => {
  searchTerm.Type = e.target.value.toLowerCase();
});

// Set searchTerm Keyword
document.querySelector("form").addEventListener("submit", e => {
  searchTerm.Keyword = document
    .getElementById("searchField")
    .value.toLowerCase(); // set text input value
  renderResults(); // Search games with defined keyword (set above)
  e.preventDefault(); // Prevent form from submit to avoid page refresh
});

// Toggle Save Game dropdown-list visibility
document.getElementById("SavedGamesContainer").addEventListener("click", () => {
  if (document.getElementById("SavedGamesContainerList").style.visibility === 'visible') {
    document.getElementById("SavedGamesContainerList").style.visibility = "hidden"; 
  }

  else {
    buildSavedGameList();
    document.getElementById("SavedGamesContainerList").style.visibility = "visible"; 
  }
});

// If hash (gameid) is already provided, load game page. This allows linking directly to specified game page without searching
window.addEventListener("load", () => {
  if (window.location.href.indexOf("#") != -1) {
    createGamePage(window.location.hash);
  }
  document.getElementById("SavedGamesContainer").textContent = `${getLocalSavedGames().length} saved games`;
});

// Close "Saved Games" dropdown-list if visitor clicks outside it
document.addEventListener('click', (e) => {
  if (e.target.id !== 'SavedGamesContainer') {
    document.getElementById("SavedGamesContainerList").style.visibility = "hidden"; 
  }
});

// Load new gamepage if user navigates using back button or similiar methods
window.addEventListener('popstate', () => {
    const popHash = document.location.hash;
    navigationEvent(popHash);
});