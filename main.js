const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color){
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);

    element.addEventListener("click", () => {
        if(awaitingEndOfMove){
            return;
        }
        
        element.style.backgroundColor = color;

        if (!activeTile) {
            activeTile = element;

            return;
        }

        const colorToMach = activeTile.getAttribute("data-color");
        if (colorToMach === color){
            active = null;
            awaitingEndOfMove = null;
            revealedCount += 2;
        }

        awaitingEndOfMove = true;

        setTimeout(()=> {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndOfMove = null;
            activeTile = null;
        }, 1000)
    });

    return element;

}

// Build up tiles
for (let i = 0; i < tileCount; i++){
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    const tile = buildTile(color);

    colorsPicklist.splice(randomIndex, 1);

    console.log(color);
    tilesContainer.appendChild(Tile);
}

console.log(colorsPicklist);