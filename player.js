class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
        var spawnX = config.width / 2 -8;
        var spawnY = config.height - 64;
        super(scene, spawnX, spawnY, "player");
        scene.physics.add.existing(this);
        scene.physics.world.enableBody(this);
        scene.add.existing(this);
        this.setInteractive();
        this.body.setCollideWorldBounds(true);

        this.health = 3;
    }


    movePlayerManager(){

        this.setVelocity(0);
        let keyW = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        let keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let keyS = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let keyShift = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

        if(keyW.isDown) {
         this.setVelocityY(-gameSettings.playerSpeed);
         this.play("player_forward");
        }
        if(keyA.isDown) {
          this.setVelocityX(-gameSettings.playerSpeed);
          this.play("player_left");
        } 
        if(keyS.isDown) {
          this.setVelocityY(gameSettings.playerSpeed);
          this.play("player_backward");
        } 
        if(keyD.isDown) {
          this.setVelocityX(gameSettings.playerSpeed);
          this.play("player_right");
        }
        if (keyShift.isDown){
          console.log('shift')
        }
    }

    shootBeamManager(){
        let keyUp = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        let keyDown = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        let keyLeft = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        let keyRight = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  
         if(Phaser.Input.Keyboard.JustDown(keyUp)) {
          // this.player.play("player_forward");
          var beam = new Beam(this.scene, "UP");
         }
         else if(Phaser.Input.Keyboard.JustDown(keyDown)) {
          //  this.player.play("player_left");
          var beam = new Beam(this.scene, "DOWN");
         } 
         else if(Phaser.Input.Keyboard.JustDown(keyLeft)) {
          //  this.player.play("player_backward");
          var beam = new Beam(this.scene, "LEFT");
         } 
         else if(Phaser.Input.Keyboard.JustDown(keyRight)) {
          //  this.player.play("player_right");
          var beam = new Beam(this.scene, "RIGHT");
         }
      }

  }
  