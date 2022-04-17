// import Enemy1 from './enemy1.js';

class Scene2 extends Phaser.Scene {

  graphics = Phaser.GameObjects.Graphics

    constructor() {
        super("playGame");
    }

    create(){

      this.graphics = this.add.graphics();
      this.setHealthBar(gameSettings.health);
      this.add.text(10, 35, "Player health", {
        fontSize: '24px'
      });

      this.physics.world.setBoundsCollision();
      this.player = new Player(this);
      this.enemy1Group = new Phaser.GameObjects.Group(this);
      this.beams = new Phaser.GameObjects.Group(this);
      var enemy1Count = Phaser.Math.Between(5, 8);
      for(let i=0; i<enemy1Count; i++){
        this.enemy1Group.add(new Enemy1(this))
      }
      var lamp = this.add.sprite(300, 300, 'lamp');
      lamp.setPipeline('Light2D');
      lamp.setScale(.1);
      var light  = this.lights.addLight(300,250,150);
      this.lights.enable().setAmbientColor(0xffffff);
      this.physics.add.overlap(this.player, this.enemy1Group, this.hurtPlayer);
      console.log(gameSettings.health);
      //this.physics.add.overlap(this.player, this.enemy1Group, this.setHealthBar(gameSettings.health));
      this.physics.add.overlap(this.beams, this.enemy1Group, this.hitEnemy, null, this);
    }


    setHealthBar(value){
      const width = 200;
      const percent = Phaser.Math.Clamp(value, 0, 100) / 100;
      this.graphics.clear();
      this.graphics.fillStyle(0x808080);
      this.graphics.fillRoundedRect(10, 10, width, 20, 5);

      if (percent > 0){
        this.graphics.fillStyle(0x00ff00);
        this.graphics.fillRoundedRect(10, 10, width * percent, 20, 5);
      }
    }

    update(){
        this.player.movePlayerManager();
        this.player.shootBeamManager()
        
        for(let i=0; i<this.enemy1Group.getLength(); i++){
          this.enemy1Group.getChildren()[i].changeEnemySpeed();
          this.enemy1Group.getChildren()[i].moveEnemy();
        }
      
        for(let i=0; i<this.beams.getLength(); i++) {
          this.beams.getChildren()[i].destroyBeam();
        }

        console.log(gameSettings.health);
        this.setHealthBar(gameSettings.health);
        if (gameSettings.health == 0){
          this.scene.start("end-screen");
        }
        if (this.enemy1Group.getLength()== 0){
          this.scene.start("win-screen");
        }

    }
    hurtPlayer(){
      gameSettings.health = Phaser.Math.Clamp(gameSettings.health - 2, 0,100); 
      //setHealthBar(gameSettings.health);
      console.log(gameSettings.health);
      console.log("Player Hurt!");
    }

    hitEnemy(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
      console.log("Enemy Hit!")
    }
}