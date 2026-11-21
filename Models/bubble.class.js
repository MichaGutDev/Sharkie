class Bubble extends MovableObject {

    width = 30;
    height = this.width;
    speedX = 11;
    speedY = 0;
    hasHit = false;


    constructor(x, y, otherDirection, isPoisoned) {
        super()
        if (isPoisoned) {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        } else {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        }
        this.x = x;
        this.y = y;
        this.isPoisoned = isPoisoned;
        if (otherDirection) {
            this.speedX = -this.speedX;
        }
        this.float();
    }


    float() {
        setInterval(() => {
            this.x += this.speedX;
            this.speedX *= 0.98;
            this.speedY += 0.05;
            this.y -= this.speedY;
        }, 1000 / 60);
    }
}