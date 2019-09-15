const contentHolder = document.getElementById("contentHolder"); // Reference for content holder
let savedGames = getLocalSavedGames(); // Get saved games from localStorage
let searchTerm = {
  Keyword: "",
  Genre: "",
  Type: "artist"
};

// Get games by search terms
function songSearch() {
  let foundSongs = ""; // variable reference

  // if search type is "artist", run this function
  if (searchTerm.Type === "artist") {
    if (searchTerm.Genre.length > 1) {
      foundSongs = gamesEntries.filter(game =>
        game.songs.some(
          song =>
            song.genre.toLowerCase() === searchTerm.Genre &&
            song.artist.toLowerCase().includes(searchTerm.Keyword)
        )
      );
    } else if (searchTerm.Genre.length < 1) {
      foundSongs = gamesEntries.filter(game =>
        game.songs.some(song =>
          song.artist.toLowerCase().includes(searchTerm.Keyword)
        )
      );
    }
  }

  // if search type is "game", run this function
  else if (searchTerm.Type === "game") {
    if (searchTerm.Genre.length > 1) {
      if (searchTerm.Keyword.length < 1) {
        foundSongs = gamesEntries.filter(game =>
          game.songs.some(song => song.genre.toLowerCase() === searchTerm.Genre)
        );
      } else if (searchTerm.Keyword.length > 1) {
        foundSongs = gamesEntries.filter(game =>
          game.songs.some(
            song =>
              song.genre.toLowerCase() === searchTerm.Genre &&
              game.title.toLowerCase().includes(searchTerm.Keyword)
          )
        );
      }
    } else {
      foundSongs = gamesEntries.filter(game =>
        game.title.toLowerCase().includes(searchTerm.Keyword)
      );
    }
  }
  return foundSongs;
}

// Create search result display game
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

// Create result page content
function createSearchResultPage(gamesFound) {
  const resultPageHolder = document.createElement("div"); // reference for resultPageHolder element
  resultPageHolder.classList.add("resultPageHolder"); // add class to resultPageHolder
  const resultPageTitle = document.createElement("h1"); // reference for songPage title H1 element
  resultPageTitle.textContent = `${gamesFound.length} Games matched with search terms`; // text content for title element
  resultPageHolder.appendChild(resultPageTitle); // add title element as resultPageHolder child
  const songPage = document.createElement("div"); // reference for songPage element
  songPage.classList.add("resultPage"); // add class to songPage
  songPage.id = "songPage"; // set songPage id for possible future manipulation
  resultPageHolder.appendChild(songPage); // add songPage as resultPageHolder children
  contentHolder.appendChild(resultPageHolder); // add resultPageHolder as resultPageHolder contentHolder
  contentHolder.insertBefore(resultPageTitle, resultPageHolder); // move section h1 element before content div

  gamesFound.forEach(item => {
    let gameCard = document.createElement("div"); // wrap item with div
    gameCard.setAttribute("gameid", item.title);
    gameCard.classList.add("gameCard"); // add class to wrapper div
    let gameCardTitle = document.createElement("div"); // create card title div
    gameCardTitle.classList.add("gameCardTitle"); // add class to card title
    gameCardTitle.textContent = item.title; // set item text

    gameCard.addEventListener("click", e => {
      // Replace whitespaces with dash, avoiding errors when searching complex game titles
      if (e.target.getAttribute("gameid") === null) return;
      window.location.hash = e.target
        .getAttribute("gameid")
        .replace(/\s/g, "-");
      createGamePage(window.location.hash);
    });

    gameCard.addEventListener("mouseover", () => {
      gameCardTitle.classList.add("active");
    });

    gameCard.addEventListener("mouseout", () => {
      gameCardTitle.classList.remove("active");
    });

    gameCard.appendChild(gameCardTitle);
    songPage.appendChild(gameCard); // place item inside result page div
  });
}

// Create "nothing found" page
function createNoResultPage() {
  const resultPageHolder = document.createElement("div"); // reference for songPageHolder element
  resultPageHolder.classList.add("resultPageHolder");

  const noResultsHolders = document.createElement("div"); // reference for "not found" page holder
  noResultsHolders.classList.add("noResults");

  const pageTitle = document.createElement("h1"); // reference for pageTitle title H1 element
  pageTitle.textContent = `Nothing found :(`; // text content for pageTitle
  resultPageHolder.appendChild(pageTitle);

  const pageSubHeader = document.createElement("p"); // reference for pageTitle title H1 element
  pageSubHeader.textContent = `Try using other search terms`; // text content for pageTitle
  resultPageHolder.appendChild(pageSubHeader);

  noResultsHolders.appendChild(pageTitle);
  noResultsHolders.appendChild(pageSubHeader);
  resultPageHolder.append(noResultsHolders);
  contentHolder.appendChild(resultPageHolder); // add result page as contentHolder child
}

// Create "Game View" page.
function createGamePage(gameid) {
  gameid = gameid
    .substr(1, gameid.length - 1)
    .replace("%20", " ")
    .toLowerCase();
  const foundGame = gamesEntries.find(
    game => game.title.toLowerCase().replace(/\s/g, "-") === gameid
  );

  contentHolder.innerHTML = null; // clear content secion
  let isAlreadySaved = savedGames.findIndex(
    game => foundGame.title === game.title
  ); // get if item is already saved into localStorage (-1 if not)

  const gamePageHolder = document.createElement("div"); // reference for gamePageHolder element
  const gamePageTitleHolder = document.createElement("div"); // reference for gamePage title H1 element
  const gamePageTitle = document.createElement("h1"); // reference for gamePage title H1 element
  const closeButton = document.createElement("div"); // reference for closeButton element
  const saveButton = document.createElement("div"); // reference for closeButton element
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

  saveButton.classList.add("saveButton"); // add class to Save Game button
  saveButton.textContent = isAlreadySaved < 0 ? "Save Game" : "Remove Game"; // add text to Save Game button
  saveButton.id = "saveGame"; /// add ID for closeButton
  gamePageTitleHolder.appendChild(saveButton); // set Save Game button as gamePageTitleHolder child

  closeButton.classList.add("closeButton"); // add class to closeButton
  closeButton.textContent = "Close Page"; // add text to closeButton
  closeButton.id = "closeGamePage"; /// add ID for closeButton
  gamePageTitleHolder.appendChild(closeButton); // set closeButton as gamePageTitleHolder child

  const gameInfo = document.createElement("div"); // create Game info element
  const gameProfile = document.createElement("div"); // reference for game profile
  const gameDetails = document.createElement("div"); // reference for game details
  const gameCover = document.createElement("IMG"); // reference for game cover

  gameInfo.classList.add("gameInfo"); // add class for gameinfo div
  gameProfile.classList.add("gameProfile"); // add class for game profile div
  gameDetails.classList.add("gameDetails"); // add class for game details div
  gameCover.setAttribute("src", `./img/${foundGame.cover}`); // set game cover image SRC

  // Put sections where they belong
  gamePage.appendChild(gameInfo);
  gameInfo.appendChild(gameProfile);
  gameInfo.appendChild(gameDetails);
  gameProfile.appendChild(gameCover);
  gameProfile.appendChild(gameCover);

  // add event listener for closing page
  closeButton.addEventListener("click", () => {
    history.pushState("", document.title, window.location.pathname); // clear hash from URL, answer found from https://stackoverflow.com/questions/4508574/remove-hash-from-url
    renderResults(searchTerm.Keyword); // return to main view and render search results again with last used search keyword
  });

  // add event listener for saving/removing localStorage game item
  saveButton.addEventListener("click", () => {
    localGameStatus(foundGame);
  });

  let songListHeader = document.createElement("div"); // create "song list header" div element
  songListHeader.classList.add("song-list-header"); // add class to "song list holder" element

  for (let x = 0; x < Object.keys(foundGame.songs[0]).length; x++) {
    let songListElement = document.createElement("div"); // create "song element" element
    songListElement.classList.add("song-item"); // add class to "song element"
    songListElement.textContent = Object.keys(foundGame.songs[0])[
      x
    ].toUpperCase(); // add song detail into song list element
    songListHeader.appendChild(songListElement); // add "song element" into song "song list holder"
  }

  gameDetails.appendChild(songListHeader); // append song element into game details list
  // Loop each song item and add them under "Game Details" as song-list element
  foundGame.songs.forEach(song => {
    let songListHolder = document.createElement("div"); // create "song holder" div element
    songListHolder.classList.add("song-list"); // add class to "song list holder" element
    for (let x = 0; x < Object.keys(song).length; x++) {
      let songListElement = document.createElement("div"); // create "song element" element
      songListElement.classList.add("song-item"); // add class to "song element"
      songListElement.textContent = Object.entries(song)[x][1]; // add song detail into song list element
      songListHolder.appendChild(songListElement); // add "song element" into song "song list holder"

      // Highlight row which matches searchTerm Keyword
      if (
        searchTerm.Keyword.length > 2 &&
        Object.entries(song)
          [x][1].toLowerCase()
          .includes(searchTerm.Keyword)
      ) {
        songListElement.parentElement.classList.add("active");
      }
    }
    gameDetails.appendChild(songListHolder); // append song element into game details list
  });
}

// Update game page save/remove button text content
function localGameStatus(foundGame) {
  let isAlreadySaved = savedGames.findIndex(
    game => foundGame.title === game.title
  ); // get if item is already saved into localStorage (-1 if not)
  isAlreadySaved < 0
    ? (document.getElementById("saveGame").textContent = "Remove Game")
    : (document.getElementById("saveGame").textContent = "Save Game");
  isAlreadySaved < 0 ? saveLocalGame(foundGame) : removeLocalGame(foundGame);
}

// Load games from localStorage
function getLocalSavedGames() {
  if (JSON.parse(localStorage.getItem("SavedGames")) !== null) {
    return JSON.parse(localStorage.getItem("SavedGames"));
  }

  return [];
}

// Save game to localStorage
function saveLocalGame(foundGame) {
  savedGames.push({
    title: foundGame.title
  });
  localStorage.setItem("SavedGames", JSON.stringify(savedGames));
  updateLocalSavedGamesCount();
}

// Remove game from localStorage
function removeLocalGame(foundGame) {
  const removeIndex = savedGames.findIndex(
    game => foundGame.title === game.title
  );
  let tempGames = savedGames;
  tempGames.splice(removeIndex, 1);
  localStorage.setItem("SavedGames", JSON.stringify(tempGames));
  updateLocalSavedGamesCount();
}

// Get and set "Saved Games" counter
function updateLocalSavedGamesCount () {
  document.getElementById("SavedGamesContainer").textContent = `${getLocalSavedGames().length} saved games`;
}

// Build saved game list to be used for dropdown-list
function buildSavedGameList() {
  let gameList = getLocalSavedGames();
  let SavedGamesContainerList = document.getElementById("SavedGamesContainerList");
  SavedGamesContainerList.innerHTML = null;
  let gameListHolder = document.createElement("ul");
  SavedGamesContainerList.appendChild(gameListHolder);
  gameList.forEach((game) => {
    let gameItem = document.createElement("li");
    gameItem.textContent = game.title;
    gameItem.setAttribute('gameid', game.title);
    gameItem.addEventListener("click", e => {
      window.location.hash = e.target.getAttribute("gameid").replace(/\s/g, "-");
      e.target.parentElement.parentElement.style.visibility = 'hidden';
      createGamePage(window.location.hash);
    });
    gameListHolder.appendChild(gameItem);
  });
}