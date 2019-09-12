const contentHolder = document.getElementById("contentHolder"); // reference for content holder

let searchTerm = {
  Keyword: "",
  Genre: ""
};

// get games by search terms
function songSearch(searchTerm) {
  return (searchResults = gamesEntries.filter(game =>
    game.songs.some(
      song =>
        song.title.toLowerCase() === searchTerm ||
        song.artist.toLowerCase() === searchTerm // match both song title and artist, convert to lowercase to ignore case sensitive
    )
  ));
}

// create search result display game
function renderResults(searchTerm) {
  let gamesFound = songSearch(searchTerm); // get array from search results
  contentHolder.innerHTML = null; // reset content div (to avoid duplicate sections)

  if (gamesFound.length > 0) {
    createSearchResultPage(gamesFound); // create result page
    // add animation to reveal content, visual cue for visitor that new search is finished
    contentHolder.style.display = "none"; // dirty hack to hide div before adding animations
    $("#contentHolder").fadeIn(250); // set fadeIn duration
  } else {
    createNoResultPage(); // create "no results found" page
  }
}

// create result page content
function createSearchResultPage(gamesFound) {
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
    cardHolder.setAttribute("gameid", item.title);
    cardHolder.classList.add("cardHolder"); // add class to wrapper div
    let titleHolder = document.createElement("div"); // create card title div
    titleHolder.classList.add("cardHolderTitle"); // add class to card title
    titleHolder.textContent = item.title; // set item text
    cardHolder.addEventListener("click", e => {
      window.location.hash = e.target.getAttribute("gameid");
      createGamePage(window.location.hash);
    });
    cardHolder.appendChild(titleHolder);
    songPage.appendChild(cardHolder); // place item inside result page div
  });
}

// create "nothing found" page
function createNoResultPage() {
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
  gameid = gameid
    .substr(1, gameid.length - 1)
    .replace("%20", " ")
    .toLowerCase();
  const foundGame = gamesEntries.find(
    game => game.title.toLowerCase() === gameid
  );
  contentHolder.innerHTML = null;

  const gamePageHolder = document.createElement("div"); // reference for gamePageHolder element
  const gamePageTitleHolder = document.createElement("div"); // reference for gamePage title H1 element
  const gamePageTitle = document.createElement("h1"); // reference for gamePage title H1 element
  const closeButton = document.createElement("div"); // reference for closeButton element
  const gamePage = document.createElement("div"); // reference for gamePage element

  gamePageHolder.classList.add("gamePageHolder"); // add class to gamePageHolder
  gamePageTitleHolder.classList.add("gamePageTitle"); //add class to gamePageTitle
  gamePageTitle.textContent = `${foundGame.title}`; // text content for title element
  contentHolder.appendChild(gamePageTitleHolder); // add gamePageTitleHolder as contentHolder child
  gamePageHolder.appendChild(gamePageTitle); // add title element as songPageHolder child

  gamePage.classList.add("gamePage"); // add class to gamePage
  gamePage.id = "gamePage"; // set gamePage id for possible future manipulation
  gamePageHolder.appendChild(gamePage); // add gamePage as SongPageHolder children
  contentHolder.appendChild(gamePageHolder); // add gamePage as contentHolder contentHolder
  contentHolder.insertBefore(gamePageTitle, gamePageHolder); // move section h1 element before content div
  gamePageTitleHolder.appendChild(gamePageTitle);

  closeButton.classList.add("closeButton"); // add class to closeButton
  closeButton.textContent = "Close Page"; // add text to closeButton
  closeButton.id = "closeGamePage"; /// add ID for closeButton
  gamePageTitleHolder.appendChild(closeButton); // set closeButton as gamePageTitleHolder child

  const gameInfo = document.createElement("div");
  const gameCover = document.createElement("div");
  const gameDetails = document.createElement("div");
  gameInfo.classList.add("gameInfo");
  gameCover.classList.add("gameCover");
  gameDetails.classList.add("gameDetails");

  gamePage.appendChild(gameInfo);
  gameInfo.appendChild(gameCover);
  gameInfo.appendChild(gameDetails);

  gameCover.innerHTML = `<img src='./img/${foundGame.cover}'>`;

  // add event listener for closing page
  closeButton.addEventListener("click", () => {
    history.pushState("", document.title, window.location.pathname); // clear hash from URL, answer found from https://stackoverflow.com/questions/4508574/remove-hash-from-url
    renderResults(searchTerm.Keyword); // return to main view and render search results again with last used search keyword
  });


  // Loop each song item and add them under "Game Details" as song-list element
  foundGame.songs.forEach(song => {
    let songListHolder = document.createElement("div"); // create "song holder" div element
    songListHolder.classList.add("song-list"); // add class to "song list holder" element
      for (let x = 0; x < Object.keys(song).length; x++) {
        let songListElement = document.createElement("div"); // create "song element" element
        songListElement.classList.add("song-item"); // add class to "song element"
        songListElement.textContent = Object.entries(song)[x][1]; // add song detail into song list element
        songListHolder.appendChild(songListElement); // add "song element" into song "song list holder"
        if (Object.entries(song)[x][1].toLowerCase() === searchTerm.Keyword) {
          songListElement.parentElement.classList.add('active');
        }
    }
    gameDetails.appendChild(songListHolder); // append song element into game details list
  })
}
