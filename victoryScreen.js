class victoryScreen extends Phaser.Scene {

    constructor() {
        super("win-screen");
    }

    preload(){
    }

    create(){
        this.add.text((this.game.renderer.width / 2)-50, this.game.renderer.height / 2, "you win", {
            fontSize: '24px'
          });
    }

    update(){
       
    }
}