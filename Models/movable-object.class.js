class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 100;
    width = 80;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
        
    }
}