class Enemy1 extends Phaser.GameObjects.Sprite{

    constructor(scene){
        var spawnX = Phaser.Math.Between(100, config.width-100);
        var spawnY = Phaser.Math.Between(100, config.height-200);
        super(scene, spawnX, spawnY, "enemy1");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        scene.enemy1Group.add(this);
        this.speed_x = 1;
        this.speed_y = 1;
        this.play("enemy1");
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