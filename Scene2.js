class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){
        this.add.text(20,20, "playing", {
            font: "25px Arial", 
            fill: "yellow"
        });

        this.player = this.physics.add.sprite(config.width / 2 -8, config.height - 64, "player");
        //this.player.frame = 12;
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setInteractive();
        /*
        leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        */
    }

    update(){

        this.movePlayerManager();

    }
    movePlayerManager(){

        this.player.setVelocity(0);
        /*
        if(Phaser.Input.Keyboard.JustDown(upKey)){
          this.player.play("player_forward");
        }
        if(Phaser.Input.Keyboard.JustDown(downKey)){
          this.player.play("player_backward");
        }
        if(Phaser.Input.Keyboard.JustDown(leftKey)){
          this.player.play("player_left");
        }
        if(Phaser.Input.Keyboard.JustDown(rightKey)){
          this.player.play("player_right");
        }
        */

        
    
        // need to figure out how to smoothly change which direction player faces
        if(this.cursorKeys.left.isDown){
          this.player.setVelocityX(-gameSettings.playerSpeed);
          this.player.play("player_left");
        }else if(this.cursorKeys.right.isDown){
          this.player.setVelocityX(gameSettings.playerSpeed);
          this.player.play("player_right");
        }
    
        if(this.cursorKeys.up.isDown){
          this.player.setVelocityY(-gameSettings.playerSpeed);
          this.player.play("player_forward");
        }else if(this.cursorKeys.down.isDown){
          this.player.setVelocityY(gameSettings.playerSpeed);
          this.player.play("player_backward");
        }
    }
}