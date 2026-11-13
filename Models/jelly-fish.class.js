class JellyFish extends Enemy {

    offset = {
        top: 20,
        left: 5,
        right: 5,
        bottom: 20
    };
    IMAGES_MOVE = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_MOVE);
        this.loadImages(this.IMAGES_DEAD);
        this.currentImage = Math.floor(Math.random() * this.IMAGES_MOVE.length);

        this.x = 400 + Math.random() * (LEVEL_END_X - 800);
        this.y = Math.random() * 400;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimationOnce(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_MOVE);
            }}
            , 350);
    }
}