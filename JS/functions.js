const contentHolder = document.getElementById("contentHolder"); // reference for content holder

// get games by search terms
function songSearchResults(searchTerm) {
  return (searchResults = gamesEntries.filter(game =>
    game.songs.some(
      song => song.title.toLowerCase() === searchTerm || song.artist.toLowerCase() === searchTerm // match both song title and artist, convert to lowercase to ignore case sensitive
    )
  ));
}

// create search result display game
function renderResults(searchTerm) {
  let gamesFound = songSearchResults(searchTerm); // get array from search results
  contentHolder.innerHTML = null; // reset content div (to avoid duplicate sections)

  if (gamesFound.length > 0) {
    createSongPage(gamesFound); // create result page
    // add animation to reveal content, visual cue for visitor that new search is finished
    contentHolder.style.display = "none"; // dirty hack to hide div before adding animations
    $("#contentHolder").fadeIn(250); // set fadeIn duration
  }

  else {
    createNoResultPage(); // create "no results found" page
  }
}

// create result page content
function createSongPage(gamesFound) {
  const songPageHolder = document.createElement("div"); // reference for songPageHolder element
  songPageHolder.classList.add("resultPageHolder"); // add class to songPageHolder
  const songPageTitle = document.createElement("h1"); // reference for songPage title H1 element
  songPageTitle.textContent = `${gamesFound.length} Games matched with search terms`; // text content for title element
  songPageHolder.appendChild(songPageTitle); // add title element as songPageHolder child
  const songPage = document.createElement("div"); // reference for songPage element
  songPage.classList.add("resultPage"); // add class to songPage
  songPage.id = "songPage"; // set songPage id for possible future manipulation
  songPageHolder.appendChild(songPage); // add songPage as SongPageHolder children
  contentHolder.appendChild(songPageHolder); // add songPageHolder as SongPageHolder contentHolder
  contentHolder.insertBefore(songPageTitle, songPageHolder); // move section h1 element before content div

  gamesFound.forEach(item => {
    let cardHolder = document.createElement("div"); // wrap item with div
    cardHolder.classList.add("cardHolder"); // add class to wrapper div
    let titleHolder = document.createElement("div"); // create card title div
    titleHolder.classList.add("cardHolderTitle"); // add class to card title
    titleHolder.textContent = item.title; // set item text
    cardHolder.appendChild(titleHolder);
    songPage.appendChild(cardHolder); // place item inside result page div
  });
}

// create "nothing found" page
function createNoResultPage () {
  const songPageHolder = document.createElement("div"); // reference for songPageHolder element
  songPageHolder.classList.add("resultPageHolder");
  const songPageTitle = document.createElement("h1"); // reference for songPage title H1 element
  songPageTitle.textContent = `Nothing found :(`; // text contentr for songPageTitle
  songPageHolder.appendChild(songPageTitle); // add songPageTitle as songPageHolder child
  const songPage = document.createElement("div"); // reference for songPage title H1 element
  songPage.classList.add("resultPage"); // add class to songPage
  songPage.id = "songPage"; // set songPage id for possible future manipulation
  songPageHolder.appendChild(songPage); // add songPage as songPageHolder child
  contentHolder.appendChild(songPageHolder); // add songPageHolder as contentHolder child
}
