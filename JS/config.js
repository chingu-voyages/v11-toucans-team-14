const genres = ["Jazz"];

function dynamicGenres() {
  gamesEntries.forEach(i => {
    const songsToGetGenresFrom = i.songs;
    songsToGetGenresFrom.forEach(v => {
      const genreNames = v.genre;

      genres.push(genreNames);
    });
  });
}

dynamicGenres();

const genresToAdd = genres.filter(function(item, index) {
  return genres.indexOf(item) === index;
});

genresToAdd.sort();
genresToAdd.shift();

function addingGenresToDropDown() {
  for (i = 0; i < genresToAdd.length; i++) {
    const genre = `<option value=>${genresToAdd[i]}</option>`;
    let node = document.createElement("option");
    node.value = genresToAdd[i];
    node.textContent = genresToAdd[i];

    document.getElementById("selectGenre").appendChild(node);
  }
}

addingGenresToDropDown();

let searchFieldToListen = document.getElementById("searchField");

const theBodyofTheDocument = document.getElementById("bodyHolder");

let titleForNow = "GameTunes - Matching games to tunes";

document.title = titleForNow;
let b = document.getElementById("contentHolder");

theBodyofTheDocument.addEventListener("click", e => {
  if (e.target.classList.contains("gameCard")) {
    const tab = window.location.href;
    let tabName = tab.split("#")[1];
    let realTab = tabName.replace(/-/g, " ");
    document.title = realTab;
  }

  if (e.target.innerHTML === "Search") {
    titleForNow = "GameTunes - Matching games to tunes";
    document.title = titleForNow;
  }

  if (e.target.classList.contains("closeButton")) {
    titleForNow = "GameTunes - Matching games to tunes";
    document.title = titleForNow;
  }

  if (e.target.tagName == "LI") {
    const tab = window.location.href;
    let tabName = tab.split("#")[1];
    let realTab = tabName.replace(/-/g, " ");
    document.title = realTab;
  }
});

function onReload() {
  const tab = window.location.href;
  let tabName = tab.split("#")[1];

  if (tabName == undefined) {
    document.title = "GameTunes - Matching games to tunes";
  } else {
    let realTab = tabName.replace(/-/g, " ");
    document.title = realTab;
  }
}

onReload();

window.onpopstate = () => {
  const tab = window.location.href;
  let tabName = tab.split("#")[1];

  if (tabName == undefined) {
    document.title = "GameTunes - Matching games to tunes";
  } else {
    let realTab = tabName.replace(/-/g, " ");
    document.title = realTab;
  }
};
