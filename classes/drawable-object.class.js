class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 114;
    width = 80;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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
}