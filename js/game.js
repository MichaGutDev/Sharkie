let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard)

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
    }
    console.log(keyboard);
    
}


window.addEventListener('keydown', (event) => setKey(event, true));
window.addEventListener('keyup', (event) => setKey(event, false));