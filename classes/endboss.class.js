class Endboss extends Enemy {

    width = 300;
    height = this.width * 1.168;   // keep image ratio (1041 x 1216)
    x = WORLD_WIDTH - 370;   // visible at the end of the level
    y = 0;
    offset = {
        top: 140,
        left: 25,
        right: 30,
        bottom: 70
    };
    hasAppeared = false;
    isIntroduced = false;
    isAttacking = false;
    lastAttack = 0;
    speed = 6;
    targetY = 0;
    targetX = 0;
    attackPause = 4000;

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_FLOATING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/1.png',
        'img/2.Enemy/3 Final Enemy/Dead/2.png',
        'img/2.Enemy/3 Final Enemy/Dead/3.png',
        'img/2.Enemy/3 Final Enemy/Dead/4.png',
        'img/2.Enemy/3 Final Enemy/Dead/5.png',
        'img/2.Enemy/3 Final Enemy/Dead/6.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.startX = this.x;
        this.startY = this.y;
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }


    animate() {
        this.animateImages();
        setStoppableInterval(() => this.moveEndboss(), 1000 / 60);
    }


    animateImages() {
        setStoppableInterval(() => {
            if (!this.hasAppeared) {
                return;
            }
            let animation = this.getAnimation();
            this.checkAnimationChange(animation);
            if (Date.now() - this.lastFrameTime >= animation.speed) {
                if (animation.once) {
                    this.playAnimationOnce(animation.images);
                } else {
                    this.playAnimation(animation.images);
                }
                this.checkIntroDone();
                this.checkAttackDone();
                this.lastFrameTime = Date.now();
            }
        }, 25);
    }


    getAnimation() {
        if (this.isDead()) {
            return { images: this.IMAGES_DEAD, speed: 120, once: true };
        }
        if (!this.isIntroduced) {
            return { images: this.IMAGES_INTRODUCE, speed: 120, once: true };
        }
        if (this.isAttacking) {
            return { images: this.IMAGES_ATTACK, speed: 150, once: true };
        }
        if (this.isHurt()) {
            return { images: this.IMAGES_HURT, speed: 120 };
        }
        return { images: this.IMAGES_FLOATING, speed: 350 };
    }


    draw(ctx) {
        if (this.hasAppeared) {
            super.draw(ctx);
        }
    }


    checkIntroDone() {
        if (!this.isIntroduced && this.isAnimationDone) {
            this.isIntroduced = true;
            this.lastAttack = Date.now();
            this.attackPause = 3500 + Math.random() * 1500;
        }
    }


    checkAttackDone() {
        if (this.isAttacking && this.isAnimationDone) {
            this.isAttacking = false;
            this.lastAttack = Date.now();
            this.attackPause = 3500 + Math.random() * 1500;
        }
    }


    moveEndboss() {
        if (!this.isIntroduced || this.isDead()) {
            return;
        }
        if (this.isAttacking) {
            this.moveToX(this.targetX);
            this.moveToY(this.targetY);
        } else {
            this.moveToX(this.startX);
            this.moveToY(this.startY);
        }
    }


    moveToY(target) {
        if (Math.abs(this.y - target) > this.speed) {
            if (this.y < target) {
                this.y += this.speed;
            } else {
                this.y -= this.speed;
            }
        }
    }


    moveToX(target) {
        if (Math.abs(this.x - target) > this.speed) {
            if (this.x < target) {
                this.x += this.speed;
            } else {
                this.x -= this.speed;
            }
        }
    }
}