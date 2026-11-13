class Enemy extends MovableObject {
    
    die() {
        this.energy = 0;
        this.currentImage = 0;
    }
}