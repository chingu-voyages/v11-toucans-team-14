// Small functions to test different features without touching production code itself

const isActive = true; // if true, we will run testContent function, otherwise we wont.

// Add defined numbers of items to gameEntries array, used to test website layout when certain amount of items are returned from search.
function testContent(itemAmount) {
    for (let x = 0; x < itemAmount; x++ ) {
      gamesEntries.push(gamesEntries[0]);
    }
  }
  
  if (isActive) {
    testContent(10);
  }
