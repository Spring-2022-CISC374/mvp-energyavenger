// import Enemy1 from './enemy1.js';

class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){

        this.player = this.physics.add.sprite(config.width / 2 -8, config.height - 64, "player");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setInteractive();
        this.player.body.setCollideWorldBounds(true);
        this.physics.world.setBoundsCollision();


        this.enemy1Group = new Phaser.GameObjects.Group(this);
        this.beams = new Phaser.GameObjects.Group(this);
        var enemy1Count = Phaser.Math.Between(5, 8);
        for(let i=0; i<enemy1Count; i++){
          this.enemy1Group.add(new Enemy1(this))
        }

        this.physics.add.overlap(this.player, this.enemy1Group, this.hurtPlayer);
        this.physics.add.overlap(this.beams, this.enemy1Group, this.hitEnemy, null, this);

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(){
        this.movePlayerManager();
        
        for(let i=0; i<this.enemy1Group.getLength(); i++){
          this.enemy1Group.getChildren()[i].changeEnemySpeed();
          this.enemy1Group.getChildren()[i].moveEnemy();
        }

        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
          this.shootBeam();
        }
        this.shootBeamManager()
    }
    movePlayerManager(){

        this.player.setVelocity(0);
        let keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        let keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let keyShift = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        let keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        let keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        let keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        let keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        if(keyW.isDown) {
         this.player.setVelocityY(-gameSettings.playerSpeed);
         this.player.play("player_forward");
        }
        if(keyA.isDown) {
          this.player.setVelocityX(-gameSettings.playerSpeed);
          this.player.play("player_left");
        } 
        if(keyS.isDown) {
          this.player.setVelocityY(gameSettings.playerSpeed);
          this.player.play("player_backward");
        } 
        if(keyD.isDown) {
          this.player.setVelocityX(gameSettings.playerSpeed);
          this.player.play("player_right");
        }
        if (keyShift.isDown){
          console.log('shift')
        }
    }

    shootBeamManager(){
      let keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      let keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      let keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      let keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

      if(Phaser.Input.Keyboard.JustDown(keyUp)) {
        // this.player.play("player_forward");
        this.shootBeam("UP")
       }
       else if(Phaser.Input.Keyboard.JustDown(keyDown)) {
        //  this.player.play("player_left");
        this.shootBeam("DOWN")
       } 
       else if(Phaser.Input.Keyboard.JustDown(keyLeft)) {
        //  this.player.play("player_backward");
        this.shootBeam("LEFT")
       } 
       else if(Phaser.Input.Keyboard.JustDown(keyRight)) {
        //  this.player.play("player_right");
        this.shootBeam("RIGHT")
       }


    }

    hurtPlayer(){
      console.log("Player Hurt!")
    }
    hitEnemy(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
      console.log("Enemy Hit!")
    }
    shootBeam(direction) {
      var beam = new Beam(this, direction);
    }
}