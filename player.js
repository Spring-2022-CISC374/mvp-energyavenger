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

  }
  