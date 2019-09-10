// Get game by search word (not used yet)
function gameTitleSearchResults(gamesArray) {
  return gamesArray.filter(game => game.title === "Esimerkki");
}

// Get games by searched song title
function songTitleSearchResults(searchTerm) {
  return (searchResults = gamesEntries.filter(game =>
    game.songs.some(
      song => song.title.toLowerCase() === searchTerm.toLowerCase()
    )
  ));
}

function renderResults(searchTerm) {
  let gamesFound = songTitleSearchResults(searchTerm); // Get array from search results
  document.getElementById("searchResults").innerHTML = null; // Clear search result div

  // Create result items (game card)
  if (gamesFound.length <= 0) {
    document.getElementById("searchResults").textContent = "No games found";
  } else {
    gamesFound.forEach(item => {
      let cardHolder = document.createElement("div"); // wrap item with div
      cardHolder.classList.add("cardHolder"); // add class to wrapper div
      cardHolder.textContent = item.title; // set item text
      document.getElementById("searchResults").appendChild(cardHolder); // Place item inside search result div
    });
  }
}
