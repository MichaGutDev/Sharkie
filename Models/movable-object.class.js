class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 114;
    width = 80;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    energy = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Enemy) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.getOffsetLeft(),
                this.y + this.offset.top,
                this.width - this.getOffsetLeft() - this.getOffsetRight(),
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.stroke();
        }
    }


    /**
     * 
     * @param {Array} arr - ['img/]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    playAnimation(images) {
        let index = this.currentImage % images.length;
        let path = images[index];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        console.log('Moving right');
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


    isColliding(mo) {
        return this.x + this.width - this.getOffsetRight() > mo.x + mo.getOffsetLeft() &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.getOffsetLeft() < mo.x + mo.width - mo.getOffsetRight() &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


        hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
    }


    isDead() {
        return this.energy == 0;
    }


    getOffsetLeft() {
        if (this.otherDirection) {
            return this.offset.right;
        }
        return this.offset.left;
    }


    getOffsetRight() {
        if (this.otherDirection) {
            return this.offset.left;
        }
        return this.offset.right;
    }


}