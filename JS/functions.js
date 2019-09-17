const contentHolder = document.getElementById("contentHolder");
let savedGames = getLocalSavedGames();
let searchTerm = {
  Keyword: "",
  Genre: "",
  Type: "artist"
};

// Get games by search terms
function songSearch() {
  let foundSongs = "";

  if (searchTerm.Type === "artist") {
    if (searchTerm.Genre.length > 1) {
      foundSongs = gamesEntries.filter(game =>
        game.songs.some(
          song =>
            song.genre.toLowerCase() === searchTerm.Genre &&
            song.artist.toLowerCase().includes(searchTerm.Keyword)
        )
      );
    } 
    else if (searchTerm.Genre.length < 1) {
      foundSongs = gamesEntries.filter(game =>
        game.songs.some(song =>
          song.artist.toLowerCase().includes(searchTerm.Keyword)
        )
      );
    }
  }

  else if (searchTerm.Type === "game") {
    if (searchTerm.Genre.length > 1) {
      if (searchTerm.Keyword.length < 1) {
        foundSongs = gamesEntries.filter(game =>
          game.songs.some(song => song.genre.toLowerCase() === searchTerm.Genre)
        );
      } 
      else if (searchTerm.Keyword.length > 1) {
        foundSongs = gamesEntries.filter(game =>
          game.songs.some(
            song =>
              song.genre.toLowerCase() === searchTerm.Genre &&
              game.title.toLowerCase().includes(searchTerm.Keyword)
          )
        );
      }
    } 
    else {
      foundSongs = gamesEntries.filter(game =>
        game.title.toLowerCase().includes(searchTerm.Keyword)
      );
    }
  }

  return foundSongs;
}

// Create search result display game
function renderResults(searchTerm) {
  let gamesFound = songSearch(searchTerm);
  contentHolder.innerHTML = null;

  if (gamesFound.length > 0) {
    createSearchResultPage(gamesFound);
    // add animation to reveal content, visual cue for visitor that new search is finished
    contentHolder.style.display = "none"; 
    $("#contentHolder").fadeIn(250);
  } else {
    createNoResultPage();
  }
}

// Create result page content
function createSearchResultPage(gamesFound) {
  const resultPageHolder = document.createElement("div");
  resultPageHolder.classList.add("resultPageHolder");
  const resultPageTitle = document.createElement("h1");
  resultPageTitle.textContent = `${gamesFound.length} Games matched with search terms`;
  resultPageHolder.appendChild(resultPageTitle);
  const songPage = document.createElement("div");
  songPage.classList.add("resultPage");
  songPage.id = "songPage";
  resultPageHolder.appendChild(songPage);
  contentHolder.appendChild(resultPageHolder);
  contentHolder.insertBefore(resultPageTitle, resultPageHolder);

  gamesFound.forEach(item => {
    let gameCard = document.createElement("div");
    gameCard.setAttribute("gameid", item.title);
    gameCard.classList.add("gameCard");
    gameCard.style.backgroundImage = `url("./img/${item.cover}")`;
    let gameCardTitle = document.createElement("div");
    gameCardTitle.classList.add("gameCardTitle");
    gameCardTitle.textContent = item.title;

    gameCard.addEventListener("click", e => {
      // Replace whitespaces with dash, avoiding errors when searching complex game titles
      if (e.target.getAttribute("gameid") === null) return;
      window.location.hash = e.target.getAttribute("gameid").replace(/\s/g, "-");
      createGamePage(window.location.hash);
    });

    gameCard.addEventListener("mouseover", () => {
      gameCardTitle.classList.add("active");
    });

    gameCard.addEventListener("mouseout", () => {
      gameCardTitle.classList.remove("active");
    });

    gameCard.appendChild(gameCardTitle);
    songPage.appendChild(gameCard);
  });
}

// Create "nothing found" page
function createNoResultPage() {
  const resultPageHolder = document.createElement("div");
  resultPageHolder.classList.add("resultPageHolder");
  const noResultsHolders = document.createElement("div");
  noResultsHolders.classList.add("noResults");
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = `Nothing found :(`;
  resultPageHolder.appendChild(pageTitle);
  const pageSubHeader = document.createElement("p");
  pageSubHeader.textContent = `Try using other search terms`;
  resultPageHolder.appendChild(pageSubHeader);
  noResultsHolders.appendChild(pageTitle);
  noResultsHolders.appendChild(pageSubHeader);
  resultPageHolder.append(noResultsHolders);
  contentHolder.appendChild(resultPageHolder);
}

// Create "Game View" page.
function createGamePage(gameid) {
  gameid = gameid.substr(1, gameid.length - 1).replace("%20", " ").toLowerCase();
  const foundGame = gamesEntries.find(game => game.title.toLowerCase().replace(/\s/g, "-") === gameid);
  contentHolder.innerHTML = null;
  let isAlreadySaved = savedGames.findIndex(game => foundGame.title === game.title);

  const gamePageHolder = document.createElement("div");
  const gamePageTitleHolder = document.createElement("div");
  const gamePageTitle = document.createElement("h1");
  const closeButton = document.createElement("div");
  const saveButton = document.createElement("div");
  const gamePage = document.createElement("div");

  gamePageHolder.classList.add("gamePageHolder");
  gamePageTitleHolder.classList.add("gamePageTitle");
  gamePageTitle.textContent = `${foundGame.title}`;
  contentHolder.appendChild(gamePageTitleHolder);
  gamePageHolder.appendChild(gamePageTitle);

  gamePage.classList.add("gamePage");
  gamePage.id = "gamePage";
  gamePageHolder.appendChild(gamePage);
  contentHolder.appendChild(gamePageHolder);
  contentHolder.insertBefore(gamePageTitle, gamePageHolder);
  gamePageTitleHolder.appendChild(gamePageTitle);

  saveButton.classList.add("saveButton");
  saveButton.textContent = isAlreadySaved < 0 ? "Save Game" : "Remove Game";
  saveButton.id = "saveGame";
  gamePageTitleHolder.appendChild(saveButton);

  closeButton.classList.add("closeButton");
  closeButton.textContent = "Close Page";
  closeButton.id = "closeGamePage";
  gamePageTitleHolder.appendChild(closeButton);

  const gameInfo = document.createElement("div");
  const gameProfile = document.createElement("div");
  const gameDetails = document.createElement("div");
  const gameCover = document.createElement("IMG");

  gameInfo.classList.add("gameInfo");
  gameProfile.classList.add("gameProfile");
  gameDetails.classList.add("gameDetails");
  gameCover.setAttribute("src", `./img/${foundGame.cover}`);
  gamePage.appendChild(gameInfo);
  gameInfo.appendChild(gameProfile);
  gameInfo.appendChild(gameDetails);
  gameProfile.appendChild(gameCover);
  gameProfile.appendChild(gameCover);

  // add event listener for closing page
  closeButton.addEventListener("click", () => {
    history.pushState("", document.title, window.location.pathname); // clear hash from URL, answer found from https://stackoverflow.com/questions/4508574/remove-hash-from-url
    renderResults(searchTerm.Keyword);
  });

  // add event listener for saving/removing localStorage game item
  saveButton.addEventListener("click", () => {
    localGameStatus(foundGame);
  });

  let songListHeader = document.createElement("div");
  songListHeader.classList.add("song-list-header");
  for (let x = 0; x < Object.keys(foundGame.songs[0]).length - 1; x++) {
    let songListElement = document.createElement("div");
    songListElement.classList.add("song-item");
    songListElement.textContent = Object.keys(foundGame.songs[0])[x].toUpperCase();
    songListHeader.appendChild(songListElement);
  }

  gameDetails.appendChild(songListHeader);
  // Loop each song item and add them under "Game Details" as song-list element
  foundGame.songs.forEach(song => {
    let songListHolder = document.createElement("div");
    let songInfo = document.createElement("div");
    songListHolder.classList.add("song-list");
    songInfo.id = `info-${song.title}`;
    songInfo.classList.add("song-info");

    for (let x = 0; x < Object.keys(song).length - 1; x++) {
      let songListElement = document.createElement("div");
      songListElement.classList.add("song-item");
      songListElement.textContent = Object.entries(song)[x][1];
      songListHolder.appendChild(songListElement);
      songInfo.innerHTML = `<a href='https://www.youtube.com/watch?v=${song.youtube}' target='blank'>click to listen from youtube</a> (link opens to new window)`;
      // Highlight row which matches searchTerm Keyword
      if (searchTerm.Keyword.length > 2 &&Object.entries(song)[x][1].toLowerCase().includes(searchTerm.Keyword)) {
        songListElement.parentElement.classList.add("active");
      }
    }
    // click even to reveal song info panel (youtube link etc)
    songListHolder.addEventListener("click", () => {
      let songDropDown = document.getElementById(`info-${song.title}`);
      document.querySelectorAll(".song-info").forEach(item => { 
        if (item.id !== songDropDown.id) {
          item.style.display = "none";
        }
      });
      if (songDropDown.style.display === "block") {
        songDropDown.style.display = "none";
      } 
      else {
        songDropDown.style.display = "block";
      }
    });
    gameDetails.appendChild(songListHolder);
    gameDetails.appendChild(songInfo);
  });
}

// Update game page save/remove button text content
function localGameStatus(foundGame) {
  let isAlreadySaved = savedGames.findIndex(game => foundGame.title === game.title); 
  isAlreadySaved < 0 ? (document.getElementById("saveGame").textContent = "Remove Game") : (document.getElementById("saveGame").textContent = "Save Game");
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
  savedGames.push({ title: foundGame.title });
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
function updateLocalSavedGamesCount() {
  document.getElementById("SavedGamesContainer").textContent = `${
    getLocalSavedGames().length
  } saved games`;
}

// Build saved game list to be used for dropdown-list
function buildSavedGameList() {
  let gameList = getLocalSavedGames();
  let SavedGamesContainerList = document.getElementById(
    "SavedGamesContainerList"
  );
  SavedGamesContainerList.innerHTML = null;
  let gameListHolder = document.createElement("ul");
  SavedGamesContainerList.appendChild(gameListHolder);
  gameList.forEach(game => {
    let gameItem = document.createElement("li");
    gameItem.textContent = game.title;
    gameItem.setAttribute("gameid", game.title);
    gameItem.addEventListener("click", e => {
      window.location.hash = e.target
        .getAttribute("gameid")
        .replace(/\s/g, "-");
      e.target.parentElement.parentElement.style.visibility = "hidden";
      createGamePage(window.location.hash);
    });
    gameListHolder.appendChild(gameItem);
  });
}
