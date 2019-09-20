// Small functions to test different features without touching production code itself
const isActive = false;
function testContent(itemAmount) {
  for (let x = 0; x < itemAmount; x++) {
    gamesEntries.push(gamesEntries[3]);
  }
}

if (isActive) {
  testContent(10);
}
