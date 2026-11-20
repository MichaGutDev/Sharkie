class Coin extends MovableObject {

    width = 30;
    height = this.width * 0.94;
    isCollected = false;

    IMAGES_MOVE = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];


    constructor(x, y) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_MOVE);
        this.x = x;
        this.y = y;

        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_MOVE);
        }, 350);
    }
}
