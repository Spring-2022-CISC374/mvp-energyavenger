class Player extends Phaser.Physics.Arcade.Sprite{
  
 health = 200;
  constructor(scene){

    var health = 100;
    var spawnX = config.width / 2 -8;
    var spawnY = config.height - 64;
    super(scene, spawnX, spawnY, "player");
    // scene.physics.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.add.existing(this);
    // this.setInteractive();
    // this.body.setEnable();
    // this.body.setImmovable();
    this.body.setCollideWorldBounds(true);
    // this.tint;

  }

  movePlayerManager(){

      this.setVelocity(0);
      let keyW = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      let keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      let keyS = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      let keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      let keyShift = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

      let keyUp = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      let keyDown = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      let keyLeft = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      let keyRight = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      
      if(keyW.isDown || keyUp.isDown) {
        this.setVelocityY(-gameSettings.playerSpeed);
        this.play("up-walk", true);
        gameSettings.direction = "UP";
      }
      if(keyA.isDown || keyLeft.isDown) {
        this.setVelocityX(-gameSettings.playerSpeed);
        this.play("left-walk",true);
        gameSettings.direction = "LEFT";
      } 
      if(keyS.isDown || keyDown.isDown) {
        this.setVelocityY(gameSettings.playerSpeed);
        this.play("down-walk",true);
        gameSettings.direction = "DOWN";
      }
      if(keyD.isDown || keyRight.isDown) {
        this.setVelocityX(gameSettings.playerSpeed);
        this.play("right-walk", true);
        gameSettings.direction = "RIGHT";
      } 
      if(keyW.isUp && gameSettings.direction == "UP"){
        this.setFrame(2);
      } else if(keyA.isUp && gameSettings.direction == "LEFT"){
        this.setFrame(1);
      } else if(keyS.isUp && gameSettings.direction == "DOWN"){
        this.setFrame(0);
      } else if(keyD.isUp && gameSettings.direction == "RIGHT"){
        this.setFrame(3);
      }


      /*else {
        this.setVelocityX(0);
        const key = this.player.anims.currentAnim.Key
        const parts = key.split('-');
        const direction = parts[0];
        this.player.play('${direction}-idle');
      }*/
      if (keyShift.isDown){
        console.log('shift')
      }
  }

  shootBeamManager(){
      let keyUp = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
      let keyDown = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      let keyLeft = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      let keyRight = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      let space = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

      if (Phaser.Input.Keyboard.JustDown(space)){
          var beam = new Beam(this.scene, gameSettings.direction);
      }
    

      /*
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
        */
    }
    /*
    hurtPlayer(){
      gameSettings.health = Phaser.Math.Clamp(gameSettings.health - 1, 0,100); 
      Scene2.setHealthBar(gameSettings.health);
      gameSettings.health;
      console.log("Player Hurt!");
    }
    */
   
   }



  