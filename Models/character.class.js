class Character extends MovableObject {

    width = 250;
    height = this.width * 1;
    x = 20;
    y = 100;

    
    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png')
    }
}