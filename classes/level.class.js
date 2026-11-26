class Level {
     enemies;
     lights;
     coins;
     poisons;
     backgroundObjects;
     level_end_x;

     constructor(enemies, lights, coins, poisons, backgroundObjects, levelEndX){
        this.enemies = enemies;
        this.lights = lights;
        this.coins = coins;
        this.poisons = poisons;
        this.backgroundObjects = backgroundObjects;
        this.level_end_x = levelEndX;
     }
}
