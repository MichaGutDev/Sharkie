class Light extends MovableObject {
    y = 0;
    width = 720;
    height = 480;


    constructor() {
        super().loadImage('img/3. Background/Layers/1. Light/1.png');

        this.x = Math.random() * 500;
    }
}