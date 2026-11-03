const LAYERS = ['5. Water', '4.Fondo 2', '3.Fondo 1', '2. Floor'];


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
            objects.push(new BackgroundObject(`img/3. Background/Layers/${layer}/${part}.png`, index * 719));
        });
    }
    return objects;
}


const level1 = new Level(
    [
        new JellyFish(),
        new JellyFish(),
        new JellyFish()
    ],
    [
        new Light()
    ],
    createBackground(6), 3690
);