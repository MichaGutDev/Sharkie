const LAYERS = ['5. Water', '4.Fondo 2', '3.Fondo 1', '2. Floor'];
const SECTIONS = 6;
const SECTION_WIDTH = 719;
const LEVEL_END_X = SECTIONS * SECTION_WIDTH - 620; // 620 = canvas width (720) - camera offset (100)


function createBackground(sections) {
    let objects = [];
    for (let index = 0; index < sections; index++) {
        let part;
        if (index % 2 == 0) {
            part = 'L1';
        } else {
            part = 'L2';
        }
        LAYERS.forEach(layer => {
            objects.push(new BackgroundObject(`img/3. Background/Layers/${layer}/${part}.png`, index * SECTION_WIDTH));
        });
    }
    return objects;
}


function createLights(sections) {
    let lights = [];
    for (let index = 0; index < sections; index++) {
        let part;
        if (index % 2 == 0) {
            part = '1';
        } else {
            part = '2';
        }
        lights.push(new Light(`img/3. Background/Layers/1. Light/${part}.png`, index * SECTION_WIDTH));
    }
    return lights;
}


const level1 = new Level(
    [
        new JellyFish(),
        new JellyFish(),
        new JellyFish()
    ],
    createLights(SECTIONS),
    createBackground(SECTIONS), LEVEL_END_X
);