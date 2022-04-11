class endScreen extends Phaser.Scene {

    constructor() {
        super("end-screen");
    }

    preload(){
    }

    create(){
        this.add.text((this.game.renderer.width / 2)-50, this.game.renderer.height / 2, "game over", {
            fontSize: '24px'
          });
    }

    update(){
       
    }
}