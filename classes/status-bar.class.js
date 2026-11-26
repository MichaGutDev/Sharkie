class StatusBar extends DrawableObject {

    IMAGES_LIFE = [
        'img/4. Marcadores/orange/Life/0Life.png',
        'img/4. Marcadores/orange/Life/20Life.png',
        'img/4. Marcadores/orange/Life/40Life.png',
        'img/4. Marcadores/orange/Life/60Life.png',
        'img/4. Marcadores/orange/Life/80Life.png',
        'img/4. Marcadores/orange/Life/100Life.png'
    ];

    IMAGES_COIN = [
        'img/4. Marcadores/orange/Coin/0Coin.png',
        'img/4. Marcadores/orange/Coin/20Coin.png',
        'img/4. Marcadores/orange/Coin/40Coin.png',
        'img/4. Marcadores/orange/Coin/60Coin.png',
        'img/4. Marcadores/orange/Coin/80Coin.png',
        'img/4. Marcadores/orange/Coin/100Coin.png'
    ];

    IMAGES_POISON = [
        'img/4. Marcadores/orange/poisoned bubbles/0Bubbles.png',
        'img/4. Marcadores/orange/poisoned bubbles/20Bubbles.png',
        'img/4. Marcadores/orange/poisoned bubbles/40Bubbles.png',
        'img/4. Marcadores/orange/poisoned bubbles/60Bubbles.png',
        'img/4. Marcadores/orange/poisoned bubbles/80Bubbles.png',
        'img/4. Marcadores/orange/poisoned bubbles/100Bubbles.png'
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