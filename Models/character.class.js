class Character extends MovableObject {

    width = 250;
    height = this.width * 1.227;
    x = 0;
    y = 100;
    speed = 4;
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];
    world;
    lastFrameTime = 0;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);

        this.animate();
    }


    animate() {
        setInterval(() => this.moveCharacter(), 1000 / 60);
        this.animateImages();
    }


    animateImages() {
        setInterval(() => {
            let animation = this.getAnimation();
            if (Date.now() - this.lastFrameTime >= animation.speed) {
                this.playAnimation(animation.images);
                this.lastFrameTime = Date.now();
            }
        }, 25);
    }


    getAnimation() {
        if (this.isMoving()) {
            return { images: this.IMAGES_SWIM, speed: 120 };
        }
        return { images: this.IMAGES_IDLE, speed: 250 };
    }


    isMoving() {
        let keyboard = this.world.keyboard;
        return keyboard.RIGHT || keyboard.LEFT || keyboard.UP || keyboard.DOWN;
    }


    moveCharacter() {
        this.moveHorizontal();
        this.moveVertical();
        this.updateCamera();
    }


    moveHorizontal() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.otherDirection = false;
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }


    moveVertical() {
        if (this.world.keyboard.UP) {
            this.y -= this.speed;
        }

        if (this.world.keyboard.DOWN) {
            this.y += this.speed;
        }
    }


    updateCamera() {
        this.world.camera_x = Math.max(-(WORLD_WIDTH - 720), Math.min(0, -this.x + 100));
    }
}
