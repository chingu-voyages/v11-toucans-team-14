const contentHolder = document.getElementById("contentHolder"); // reference for content holder
const searchTerm = document.getElementById("searchField").value; // reference text input value

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
    cardHolder.setAttribute('gameid', item.title);
    cardHolder.classList.add("cardHolder"); // add class to wrapper div
    let titleHolder = document.createElement("div"); // create card title div
    titleHolder.classList.add("cardHolderTitle"); // add class to card title
    titleHolder.textContent = item.title; // set item text
    cardHolder.addEventListener('click', (e) => {
      window.location.hash = e.target.getAttribute("gameid");
      createGamePage(window.location.hash);
    });
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

// Create "Game View" page.
function createGamePage(gameid) {
  gameid = gameid.substr(1, (gameid.length-1)).replace("%20", " ").toLowerCase();
  const foundGame = gamesEntries.find(game => game.title.toLowerCase() === gameid);
  contentHolder.innerHTML = null;

  const gamePageHolder = document.createElement("div"); // reference for gamePageHolder element
  gamePageHolder.classList.add("gamePageHolder"); // add class to gamePageHolder

  const gamePageTitleHolder = document.createElement("div"); // reference for gamePage title H1 element
  gamePageTitleHolder.classList.add("gamePageTitle");
  contentHolder.appendChild(gamePageTitleHolder);

  const gamePageTitle = document.createElement("h1"); // reference for gamePage title H1 element
  gamePageTitle.textContent = `${foundGame.title}`; // text content for title element
  gamePageHolder.appendChild(gamePageTitle); // add title element as songPageHolder child

  const gamePage = document.createElement("div"); // reference for gamePage element
  gamePage.classList.add("gamePage"); // add class to gamePage
  gamePage.id = "gamePage"; // set gamePage id for possible future manipulation
  gamePageHolder.appendChild(gamePage); // add gamePage as SongPageHolder children
  contentHolder.appendChild(gamePageHolder); // add gamePage as contentHolder contentHolder
  contentHolder.insertBefore(gamePageTitle, gamePageHolder); // move section h1 element before content div
  gamePageTitleHolder.appendChild(gamePageTitle);

  const closeButton = document.createElement("div"); // reference for closeButton element
  closeButton.classList.add("closeButton"); // add class to closeButton
  closeButton.textContent = "Close Page"; // add text to closeButton
  closeButton.id = "closeGamePage"; /// add ID for closeButton
  gamePageTitleHolder.appendChild(closeButton); // set closeButton as gamePageTitleHolder child

  const gameInfo = document.createElement("div");
  gameInfo.classList.add("gameInfo");
  const gameCover = document.createElement("div");
  gameCover.classList.add("gameCover");
  const gameDetails = document.createElement("div");
  gameDetails.classList.add("gameDetails");
  
  gamePage.appendChild(gameInfo);
  gameInfo.appendChild(gameCover);
  gameInfo.appendChild(gameDetails);
  
  gameCover.innerHTML = "<img src='./img/cover.jpg'>";

  // add event listener for closing page
  closeButton.addEventListener('click', (e) => {
    history.pushState("", document.title, window.location.pathname); // clear hash from URL, answer found from https://stackoverflow.com/questions/4508574/remove-hash-from-url
    renderResults(searchTerm.toLowerCase()); // return to main view and render search results again with last used search keyword
  });
  
  let songListHolder = document.createElement('ul'); // create UL element
  gamePage.appendChild(songListHolder); // append UL element as gamePage children

  // Loop each song item and add them as LI element
  foundGame.songs.forEach(song => {
    let songListElement = document.createElement('li'); // create LI element
    songListElement.textContent = `${song.title} | ${song.artist}`; // add song title to the LI element
    songListHolder.appendChild(songListElement); // add LI element as UL children
  });

  gameDetails.appendChild(songListHolder);
}