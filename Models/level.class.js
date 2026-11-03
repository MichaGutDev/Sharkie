class Level {
     enemies;
     lights;
     backgroundObjects;
     level_end_x;

     constructor(enemies, lights, backgroundObjects, levelEndX){
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.level_end_x = levelEndX;
     }
}
