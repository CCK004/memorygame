const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

//Game state
let revealedCount = 0;
let activeTile = null;



console.log(colorsPicklist);