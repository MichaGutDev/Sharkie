class Bubble extends MovableObject {

    width = 40;
    height = this.width;
    speedX = 10;
    speedY = 0;


    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.float();
    }


    float() {
        setInterval(() => {
            this.x += this.speedX;
            this.speedX *= 0.96;
            this.speedY += 0.05;
            this.y -= this.speedY;
        }, 1000 / 60);
    }
}