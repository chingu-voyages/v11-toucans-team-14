



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
//console.log(genres);




const genresToAdd = genres.filter(function(item, index) {
  return genres.indexOf(item) === index;
});

genresToAdd.sort();
genresToAdd.shift();
console.log(genresToAdd);

function addingGenresToDropDown(){

    for(i = 0;i < genresToAdd.length; i++) {

     // console.log(genresToAdd[i]);
    const genre =  `<option value=>${genresToAdd[i]}</option>`;
     let node = document.createElement('option');
     node.value = genresToAdd[i];
     node.textContent = genresToAdd[i];

    document.getElementById('selectGenre').appendChild(node);
  }

} 

addingGenresToDropDown();
//console.log(dropDownMenu)

function listen(){
   
 // document.getElementById('contentHolder').addEvenlisnter('click', e => {

    //e.preventDefault();
    //console.log(e.target);
  //})
}
//listen();

let searchFieldToListen = document.getElementById('searchField');




const theBodyofTheDocument = document.getElementById('bodyHolder');



theBodyofTheDocument.addEventListener('click', e => {
 
 
  
  if(e.target.classList.contains('gameCard')) {
    let gettingGameId = e.target.getAttribute('gameId');
    
    let convertIdToString = gettingGameId.toString();
    

    document.title = convertIdToString;

    

    e.preventDefault();
  
  } 
  
  if (e.target.innerHTML === "Search") {
    
    document.title = 'GameTunes - Matching games to tunes';
  } 

  if(e.target.classList.contains('closeButton')){
    document.title = 'GameTunes - Matching games to tunes';
  }

  if(e.target.tagName == "LI") {
    let b = e.target.getAttribute('gameId');
   
    let c = b.toString();
    

   document.title = c;
   e.preventDefault();

  

  }
  
  
})


