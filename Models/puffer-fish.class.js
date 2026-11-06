class PufferFish extends Enemy {

    width = 100;
    height = this.width * 0.822;   // keep image ratio (241 x 198)
    offset = {
        top: 8,
        left: 5,
        right: 20,
        bottom: 22
    };
    IMAGES_MOVE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_MOVE);
        this.currentImage = Math.floor(Math.random() * this.IMAGES_MOVE.length);

        this.x = 400 + Math.random() * (LEVEL_END_X - 800);
        this.y = Math.random() * 400;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.IMAGES_MOVE);
        }, 350);
    }
}