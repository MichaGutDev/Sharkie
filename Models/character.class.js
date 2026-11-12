class Character extends MovableObject {

    width = 250;
    height = this.width * 1.227;
    x = 0;
    y = 100;
    speed = 4;
    offset = {
        top: 150,
        left: 90,
        right: 55,
        bottom: 80
    };
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

    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/1.png',
        'img/1.Sharkie/2.Long_IDLE/2.png',
        'img/1.Sharkie/2.Long_IDLE/3.png',
        'img/1.Sharkie/2.Long_IDLE/4.png',
        'img/1.Sharkie/2.Long_IDLE/5.png',
        'img/1.Sharkie/2.Long_IDLE/6.png',
        'img/1.Sharkie/2.Long_IDLE/7.png',
        'img/1.Sharkie/2.Long_IDLE/8.png',
        'img/1.Sharkie/2.Long_IDLE/9.png',
        'img/1.Sharkie/2.Long_IDLE/10.png',
        'img/1.Sharkie/2.Long_IDLE/11.png',
        'img/1.Sharkie/2.Long_IDLE/12.png',
        'img/1.Sharkie/2.Long_IDLE/13.png',
        'img/1.Sharkie/2.Long_IDLE/14.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    world;
    lastFrameTime = 0;
    currentAnimation;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);

        this.animate();
    }


    animate() {
        setInterval(() => this.moveCharacter(), 1000 / 60);
        this.animateImages();
    }


    animateImages() {
        setInterval(() => {
            let animation = this.getAnimation();
            this.checkAnimationChange(animation);
            if (Date.now() - this.lastFrameTime >= animation.speed) {
                if (animation.once) {
                    this.playAnimationOnce(animation.images);
                } else {
                    this.playAnimation(animation.images);
                }
                this.lastFrameTime = Date.now();
            }
        }, 25);
    }


    checkAnimationChange(animation) {
        if (animation.images != this.currentAnimation) {
            this.currentImage = 0;
            this.isAnimationDone = false;
            this.currentAnimation = animation.images;
        }
    }


    getAnimation() {
        if (this.isDead()) {
            return { images: this.IMAGES_DEAD, speed: 120, once: true };
        }
        if (this.isHurt()) {
            return { images: this.IMAGES_HURT, speed: 120 };
        }
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
        if (this.isDead()) {
            return;
        }
        this.moveHorizontal();
        this.moveVertical();
        this.sink();
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
        if (this.world.keyboard.UP && !this.isAtTop()) {
            this.y -= this.speed;
        }

        if (this.world.keyboard.DOWN && !this.isAtBottom()) {
            this.y += this.speed;
        }
    }


    updateCamera() {
        this.world.camera_x = Math.max(-(WORLD_WIDTH - 720), Math.min(0, -this.x + 100));
    }


    sink() {
        if (!this.isMoving() && !this.isAtBottom()) {
            this.y += 0.5;
        }
    }


    isAtBottom() {
        return this.y + this.height - this.offset.bottom >= this.world.canvas.height;
    }


    isAtTop() {
        return this.y + this.offset.top <= 0;
    }
}
