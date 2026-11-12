class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    lifeBar = new StatusBar('life', 40, 100);
    coinBar = new StatusBar('coin', 80, 0);
    poisonBar = new StatusBar('poison', 0, 0);
    bubbles = [];
    lastBubble = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            if (this.character.isDead()) {
                return;
            }
            this.checkCollisions();
            this.checkBubble();
        }, 200);
    }


    checkBubble() {
        if (this.keyboard.D && !this.character.isShootingBubble && Date.now() - this.lastBubble > 600) {
            this.character.isShootingBubble = true;
            this.lastBubble = Date.now();
        }
    }


    createBubble() {
        let character = this.character;
        let x = character.x + 190;
        if (character.otherDirection) {
            x = character.x + 30;
        }
        let bubble = new Bubble(x, character.y + 170, character.otherDirection);
        this.bubbles.push(bubble);
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isHurt()) {
                this.character.hit();
                this.lifeBar.setPercentage(this.character.energy);
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0)

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.bubbles);

        this.ctx.translate(-this.camera_x, 0);

        this.drawStatusBars();

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
        mo.drawFrame(this.ctx);
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    drawStatusBars() {
        this.addToMap(this.lifeBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
    }
}
