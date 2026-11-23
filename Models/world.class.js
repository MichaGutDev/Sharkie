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
            this.checkFinSlapHits();
            this.checkCollisions();
            this.checkBubble();
            this.checkPoisonBubble();
            this.checkBubbleHits();
            this.checkCoinCollection();
            this.checkPoisonCollection();
            this.checkFinSlap();
            this.checkInflate();
            this.checkEndbossIntro();
            this.checkEndbossAttack();
        }, 1000 / 60);
    }


    checkBubble() {
        if (this.keyboard.D && !this.character.isShootingBubble && Date.now() - this.lastBubble > 600) {
            this.character.isShootingBubble = true;
            this.lastBubble = Date.now();
        }
    }


    checkPoisonBubble() {
        if (this.keyboard.F && !this.character.isShootingBubble && Date.now() - this.lastBubble > 600 && this.character.poisons > 0) {
            this.character.isShootingBubble = true;
            this.character.isShootingPoison = true;
            this.lastBubble = Date.now();
            this.character.poisons -= 1;
            this.poisonBar.setPercentage(this.character.poisons * 20);
        }
    }


    checkBubbleHits() {
        this.bubbles.forEach((bubble) => {
            this.level.enemies.forEach((enemy) => {
                if (!bubble.isPoisoned && enemy instanceof JellyFish && !enemy.isDead() && bubble.isColliding(enemy)) {
                    enemy.die();
                    bubble.hasHit = true;
                }
                if (bubble.isPoisoned && enemy instanceof Endboss && enemy.hasAppeared && !enemy.isDead() && bubble.isColliding(enemy)) {
                    enemy.hit(25);
                    bubble.hasHit = true;
                }
            });
        });
        this.bubbles = this.bubbles.filter((bubble) => !bubble.hasHit);
    }


    checkCoinCollection() {
        this.level.coins.forEach((coin) => {
            if (!coin.isCollected && this.character.isColliding(coin)) {
                coin.isCollected = true;
                this.character.collectCoin();
                this.coinBar.setPercentage(this.character.coins * 10);
            }
        });
        this.level.coins = this.level.coins.filter((coin) => !coin.isCollected);
    }


    checkPoisonCollection() {
        this.level.poisons.forEach((poison) => {
            if (!poison.isCollected && this.character.isColliding(poison)) {
                poison.isCollected = true;
                this.character.collectPoison();
                this.poisonBar.setPercentage(this.character.poisons * 20);
            }
        });
        this.level.poisons = this.level.poisons.filter((poison) => !poison.isCollected);
    }


    checkFinSlap() {
        if (this.keyboard.SPACE && !this.character.isFinSlapping) {
            this.character.isFinSlapping = true;
        }
    }


    checkFinSlapHits() {
        if (!this.character.isFinSlapping) {
            return;
        }

        let zone = this.character.getFinSlapZone();

        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof PufferFish && !enemy.isDead() && this.character.isOverlapping(zone, enemy.getHitbox())) {
                enemy.die();
            }
        });
    }


    checkInflate() {
        let hitbox = this.character.getHitbox();

        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof PufferFish && !enemy.isDead() && this.character.isOverlapping(hitbox, enemy.getInflateZone()) && !enemy.isInflated) {
                enemy.isInflated = true;
                enemy.currentImage = 0;
            }
        });
    }


    checkEndbossIntro() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Endboss && enemy.x - this.character.x < 300) {
                enemy.hasAppeared = true;
            }
        });
    }


    checkEndbossAttack() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Endboss && enemy.isIntroduced && !enemy.isDead() && !enemy.isAttacking && Date.now() - enemy.lastAttack > 2000) {
                let sharkie = this.character.getHitbox();
                let orca = enemy.getHitbox();
                enemy.targetY = enemy.y + (sharkie.y + sharkie.height / 2) - (orca.y + orca.height / 2);
                enemy.targetX = enemy.x + (sharkie.x + sharkie.width / 2) - orca.x;
                enemy.isAttacking = true;
                enemy.lastAttack = Date.now();
            }
        });
    }


    createBubble() {
        let character = this.character;
        let x = character.x + 190;
        if (character.otherDirection) {
            x = character.x + 30;
        }
        let bubble = new Bubble(x, character.y + 170, character.otherDirection, character.isShootingPoison);
        this.bubbles.push(bubble);
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (!enemy.isDead() && this.character.isColliding(enemy) && !this.character.isHurt()) {
                this.character.hit(5);
                this.lifeBar.setPercentage(this.character.energy);
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0)

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisons);

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
