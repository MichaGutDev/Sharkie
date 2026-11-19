class Level {
     enemies;
     lights;
     coins;
     backgroundObjects;
     level_end_x;

     constructor(enemies, lights, coins, backgroundObjects, levelEndX){
        this.enemies = enemies;
        this.lights = lights;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
        this.level_end_x = levelEndX;
     }
}
