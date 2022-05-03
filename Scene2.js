
class Scene2 extends Phaser.Scene {

  graphics = Phaser.GameObjects.Graphics

    constructor() {
        super("playGame");
    }

    create(){

      this.background = this.add.tileSprite(640, 360, config.width, config.height, "background");
      this.graphics = this.add.graphics();
      this.add.text(18, 15, "Player Health", {
        fontSize: '24px'
      });
      this.setHealthBar(gameSettings.health);
      
      this.physics.world.setBoundsCollision();
      this.player = new Player(this);
      this.enemy1Group = new Phaser.GameObjects.Group(this);
      this.beams = new Phaser.GameObjects.Group(this);
      // this.lamp = new Lamp(this);
      this.button = new Button(this);

      this.physics.add.collider(this.player, this.button);


      var enemy1Count = Phaser.Math.Between(5, 8);
      for(let i=0; i<enemy1Count; i++){
        this.enemy1Group.add(new Enemy1(this))
      }
      this.physics.add.collider(this.enemy1Group, this.button);



      /*
      var lampCount = Phaser.Math.Between(5,8);
      for(let i = 0; i < lampCount; i++){
        this.lampGroup.add(new lamp(this))
      }
      */
      /*
      var lamp = this.add.sprite(300, 300, 'lamp');
      lamp.setPipeline('Light2D');
      lamp.setScale(.1);
      
    this.lamp.setPipeline('Light2D');
    this.lamp.setScale(.1);
    */
    // var light  = this.lights.addLight(300,250,150);
    // this.lights.enable().setAmbientColor(gameSettings.color);
    
    // this.physics.add.overlap(this.player, this.lamp, this.test);

    this.physics.add.collider(this.player, this.enemy1Group, this.hurtPlayer);
    //this.physics.add.overlap(this.player, this.enemy1Group, this.setHealthBar(gameSettings.health));
    this.physics.add.overlap(this.beams, this.enemy1Group, this.shootEnemy, null, this);
    this.physics.add.overlap(this.beams, this.button, this.shootButton, null, this);

    }

    setHealthBar(value){
      const width = 200;
      const percent = Phaser.Math.Clamp(value, 0, 100) / 100;
      this.graphics.clear();
      this.graphics.fillStyle(0x808080);
      this.graphics.fillRoundedRect(20, 40, width, 20, 5);

      if (percent > 0){
        this.graphics.fillStyle(0x00ff00);
        this.graphics.fillRoundedRect(20, 40, width * percent, 20, 5);
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

        this.setHealthBar(gameSettings.health);
        if (gameSettings.health == 0){
          this.scene.start("end-screen");
        }
        if (this.enemy1Group.getLength()== 0){
          this.scene.start("win-screen");
        }
        // this.lights.setAmbientColor(gameSettings.color);

    }
    hurtPlayer(player){
      gameSettings.health = Phaser.Math.Clamp(gameSettings.health - 2, 0,100); 
      //setHealthBar(gameSettings.health);
      console.log(gameSettings.health);
      console.log("Player Hurt!");
      //player.tint = 0xff0000;
    }

    shootEnemy(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
      console.log("Enemy Hit!")
    }

    shootButton(projectile) {
      projectile.destroy();
    }

    test(player){
      console.log("testing");
      gameSettings.color = 0x000000;
      player.clearTint();
      // updates a global variable, only works with a single lamp, kinda bad solution, but works
    }
}