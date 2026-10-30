class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 100;
    width = 80;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * 
     * @param {Array} arr - ['img/]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });


    }

    moveRight() {
        console.log('Moving right');

    }
}