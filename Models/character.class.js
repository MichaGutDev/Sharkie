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
        'img/1.Sharkie/2.Long_IDLE/10.png'
    ];

    IMAGES_SLEEP = [
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

    IMAGES_BUBBLE_TRAP = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_POISON_BUBBLE_TRAP = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
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
    isShootingBubble = false;
    isFinSlapping = false;
    lastKeyPress = Date.now();
    isAsleep = false;
    SLEEP_SPACE = 35; // Long Idle sinks Sharkie 35 px in the image
    coins = 0;
    poisons = 0;
    isShootingPoison = false;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_BUBBLE_TRAP);
        this.loadImages(this.IMAGES_POISON_BUBBLE_TRAP);
        this.loadImages(this.IMAGES_FIN_SLAP);

        this.animate();
    }


    animate() {
        setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
        this.animateImages();
    }


    animateImages() {
        setStoppableInterval(() => {
            let animation = this.getAnimation();
            this.checkAnimationChange(animation);
            if (Date.now() - this.lastFrameTime >= animation.speed) {
                if (animation.once) {
                    this.playAnimationOnce(animation.images);
                } else {
                    this.playAnimation(animation.images);
                }
                this.checkBubbleDone();
                this.checkFinSlapDone();
                this.checkSleepDone();
                this.lastFrameTime = Date.now();
            }
        }, 25);
    }


    getAnimation() {
        if (this.isDead()) {
            return { images: this.IMAGES_DEAD, speed: 120, once: true };
        }
        if (this.isHurt()) {
            return { images: this.IMAGES_HURT, speed: 120 };
        }
        if (this.isShootingPoison) {
            return { images: this.IMAGES_POISON_BUBBLE_TRAP, speed: 120, once: true };
        }
        if (this.isShootingBubble) {
            return { images: this.IMAGES_BUBBLE_TRAP, speed: 120, once: true };
        }
        if (this.isFinSlapping) {
            return { images: this.IMAGES_FIN_SLAP, speed: 120, once: true };
        }
        if (this.isMoving()) {
            return { images: this.IMAGES_SWIM, speed: 120 };
        }
        if (this.isAsleep) {
            return { images: this.IMAGES_SLEEP, speed: 400 };
        }
        if (this.isSleep()) {
            return { images: this.IMAGES_LONG_IDLE, speed: 120, once: true };
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
        this.rise();
        this.updateCamera();
        this.checkKeyPress();
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
        let offset = 100;
        if (this.otherDirection && !this.world.isBossFight) {
            offset = 370;
        }
        let target = Math.max(-(WORLD_WIDTH - 720), Math.min(0, -this.x + offset));
        this.world.camera_x += (target - this.world.camera_x) * 0.1;
    }


    sink() {
        if (!this.isMoving() && !this.isAtBottom()) {
            this.y += 0.5;
        }
    }


    isAtTop() {
        return this.y + this.offset.top <= 0;
    }


    rise() {
        if (this.y + this.height - this.offset.bottom > this.getBottomLimit()) {
            this.y -= 0.5;
        }
    }


    isAtBottom() {
        return this.y + this.height - this.offset.bottom >= this.getBottomLimit();
    }


    getBottomLimit() {
        if (this.isAsleep) {
            return canvas.height;
        }
        return canvas.height - this.SLEEP_SPACE; // awake: keep room to sink into when falling asleep
    }


    isSleep() {
        return Date.now() - this.lastKeyPress > 3000;
    }


    checkSleepDone() {
        if (this.isSleep() && this.isAnimationDone && !this.isAsleep && !this.isDead()) {
            this.isAsleep = true;
            this.offset.top += this.SLEEP_SPACE;
            this.offset.bottom -= this.SLEEP_SPACE;
        }
    }


    checkKeyPress() {
        if (this.isMoving() || this.world.keyboard.SPACE || this.world.keyboard.D || this.world.keyboard.F) {
            this.lastKeyPress = Date.now();
            this.wakeUp();
        }
    }


    wakeUp() {
        if (this.isAsleep) {
            this.isAsleep = false;
            this.y += this.SLEEP_SPACE; // idle image starts where the sleeping image was, then rise() lifts him
            this.offset.top -= this.SLEEP_SPACE;
            this.offset.bottom += this.SLEEP_SPACE;
        }
    }


    checkBubbleDone() {
        if (this.isShootingBubble && this.isAnimationDone && !this.isDead()) {
            this.isShootingBubble = false;
            this.isAnimationDone = false;
            this.currentImage = 0;
            this.world.createBubble();
            this.isShootingPoison = false;
        }
    }


    checkFinSlapDone() {
        if (this.isFinSlapping && this.isAnimationDone && !this.isDead()) {
            this.isFinSlapping = false;
            this.isAnimationDone = false;
            this.currentImage = 0;
        }
    }


    getFinSlapZone() {
        let hitbox = this.getHitbox();
        hitbox.width += 40;
        if (this.otherDirection) {
            hitbox.x -= 40;
        }
        return hitbox;
    }


    collectCoin() {
        this.coins += 1;
    }


    collectPoison() {
        this.poisons += 1;
    }
}
