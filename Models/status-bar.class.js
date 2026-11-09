class StatusBar extends DrawableObject {

    IMAGES_LIFE = [
        'img/4. Marcadores/green/Life/0Life.png',
        'img/4. Marcadores/green/Life/20Life.png',
        'img/4. Marcadores/green/Life/40Life.png',
        'img/4. Marcadores/green/Life/60Life.png',
        'img/4. Marcadores/green/Life/80Life.png',
        'img/4. Marcadores/green/Life/100Life.png'
    ];

    x = 10;
    width = 200;
    height = this.width * 0.266;
    percentage = 100;


    constructor(type, y) {
        super();
        this.IMAGES = this.getImages(type);
        this.loadImages(this.IMAGES);
        this.y = y;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        return Math.floor(this.percentage / 20);
    }


    getImages(type) {
        if (type == 'life') {
            return this.IMAGES_LIFE;
        }
    }
}