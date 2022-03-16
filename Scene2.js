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
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setInteractive();
    }

    update(){

        this.movePlayerManager();

    }
    movePlayerManager(){

        this.player.setVelocity(0);
    
        if(this.cursorKeys.left.isDown){
          this.player.setVelocityX(-gameSettings.playerSpeed);
          //this.player.play("left");
        }else if(this.cursorKeys.right.isDown){
          this.player.setVelocityX(gameSettings.playerSpeed);
          //this.player.play("right");
        }
    
        if(this.cursorKeys.up.isDown){
          this.player.setVelocityY(-gameSettings.playerSpeed);
          //this.player.play("backward");
        }else if(this.cursorKeys.down.isDown){
          this.player.setVelocityY(gameSettings.playerSpeed);
          //this.player.play("forward");
        }
    }
}