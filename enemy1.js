class Enemy1 extends Phaser.GameObjects.Sprite{

    constructor(scene){

        var spawn_x = config.width / 2 -8;
        var spawn_y = config.height - 64;
        super(scene, spawn_x, spawn_y, "enemy1");
        scene.add.existing(this);

        this.speed_x = 1;
        this.speed_y = 1;
        this.play("enemy1");
        scene.physics.world.enableBody(this);
        this.body.setCollideWorldBounds(true);

    }

    changeEnemySpeed(){
        var changeSpeed = Phaser.Math.Between(1, 50);
        var randomX = Phaser.Math.Between(-1, 1);
        var randomY = Phaser.Math.Between(-1, 1);
    
        if(changeSpeed == 3){
          this.speed_x = randomX;
          this.speed_y = randomY;
        }
      }

    moveEnemy() {
        if(this.speed_x == 0 && this.speed_y == 0){
          this.play("enemy1");

        }
        this.x += this.speed_x;
        this.y += this.speed_y;
      }
}