const LAYERS = ['5. Water', '4.Fondo 2', '3.Fondo 1', '2. Floor'];
const SECTIONS = 6;
const SECTION_WIDTH = 719;
const WORLD_WIDTH = SECTIONS * SECTION_WIDTH;   // 4314
const LEVEL_END_X = WORLD_WIDTH - 450;   // how far Sharkie can swim
let level1;


function getSectionPart(index, evenPart, oddPart) {
    if (index % 2 == 0) {
        return evenPart;
    }
    return oddPart;
}


function createBackground(sections) {
    let objects = [];
    for (let index = 0; index < sections; index++) {
        let part = getSectionPart(index, 'L1', 'L2');
        LAYERS.forEach(layer => {
            objects.push(new BackgroundObject(`img/3. Background/Layers/${layer}/${part}.png`, index * SECTION_WIDTH));
        });
    }
    return objects;
}


function createLights(sections) {
    let lights = [];
    for (let index = 0; index < sections; index++) {
        let part = getSectionPart(index, '1', '2');
        lights.push(new Light(`img/3. Background/Layers/1. Light/${part}.png`, index * SECTION_WIDTH));
    }
    return lights;
}


function createCoins(startX) {
    let coins = [];
    for (let index = 0; index < 5; index++) {
        let degrees = 160 - index * 35;
        let angle = degrees * Math.PI / 180;
        let x = startX + Math.cos(angle) * 140;
        let y = 350 - Math.sin(angle) * 150;
        coins.push(new Coin(x, y));
    }
    return coins;
}


function createPoisons(positions) {
    let poisons = [];
    positions.forEach((x, index) => {
        let side = getSectionPart(index, 'Left', 'Right');
        poisons.push(new Poison(`img/4. Marcadores/Posión/Light - ${side}.png`, x));
    });
    return poisons;
}

function initLevel() {
    level1 = new Level(
        [
            new JellyFish(),
            new JellyFish(),
            new JellyFish(),
            new PufferFish(),
            new Endboss()
        ],
        createLights(SECTIONS),
        createCoins(600).concat(createCoins(2500)),
        createPoisons([250, 900, 1250, 1600, 1950, 2250, 2850, 3200, 3500, 3750]),
        createBackground(SECTIONS), LEVEL_END_X
    );
}