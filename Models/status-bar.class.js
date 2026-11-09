class StatusBar extends DrawableObject {

    IMAGES_LIFE = [
        'img/4. Marcadores/green/Life/0Life.png',
        'img/4. Marcadores/green/Life/20Life.png',
        'img/4. Marcadores/green/Life/40Life.png',
        'img/4. Marcadores/green/Life/60Life.png',
        'img/4. Marcadores/green/Life/80Life.png',
        'img/4. Marcadores/green/Life/100Life.png'
    ];

    IMAGES_COIN = [
        'img/4. Marcadores/green/Coin/0Coin.png',
        'img/4. Marcadores/green/Coin/20Coin.png',
        'img/4. Marcadores/green/Coin/40Coin.png',
        'img/4. Marcadores/green/Coin/60Coin.png',
        'img/4. Marcadores/green/Coin/80Coin.png',
        'img/4. Marcadores/green/Coin/100Coin.png'
    ];

    IMAGES_POISON = [
        'img/4. Marcadores/green/poisoned bubbles/0Bubbles.png',
        'img/4. Marcadores/green/poisoned bubbles/20Bubbles.png',
        'img/4. Marcadores/green/poisoned bubbles/40Bubbles.png',
        'img/4. Marcadores/green/poisoned bubbles/60Bubbles.png',
        'img/4. Marcadores/green/poisoned bubbles/80Bubbles.png',
        'img/4. Marcadores/green/poisoned bubbles/100Bubbles.png'
    ];

    x = 10;
    width = 200;
    height = this.width * 0.266;
    percentage = 100;


    constructor(type, y, percentage) {
        super();
        this.IMAGES = this.getImages(type);
        this.loadImages(this.IMAGES);
        this.y = y;
        this.setPercentage(percentage);
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
        if (type == 'coin') {
            return this.IMAGES_COIN;
        }
        if (type == 'poison') {
            return this.IMAGES_POISON;
        }
    }
}