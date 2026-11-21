class Poison extends MovableObject {
    y = 363;
    width = 55;
    height = this.width * 1.36;
    isCollected = false;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}