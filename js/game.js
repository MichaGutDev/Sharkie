let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

function init() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
}


function setKey(event, isPressed) {
    switch (event.code) {
        case 'ArrowRight': keyboard.RIGHT = isPressed; break;
        case 'ArrowLeft': keyboard.LEFT = isPressed; break;
        case 'ArrowUp': keyboard.UP = isPressed; break;
        case 'ArrowDown': keyboard.DOWN = isPressed; break;
        case 'Space': keyboard.SPACE = isPressed; break;
        case 'KeyD': keyboard.D = isPressed; break;
        case 'KeyF': keyboard.F = isPressed; break;
    }
}


function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}


function stopGame() {
    intervalIds.forEach(clearInterval);
    intervalIds = [];
}


window.addEventListener('keydown', (event) => setKey(event, true));
window.addEventListener('keyup', (event) => setKey(event, false));