class victoryScreen extends Phaser.Scene {

    constructor() {
        super("win-screen");
    }

    preload(){
    }

    create(){
        this.add.text((this.game.renderer.width / 2)-40, this.game.renderer.height / 2, "you win", {
            fontSize: '24px'
          });
          let retryButton = this.add.image((this.game.renderer.width / 2)+ 15, this.game.renderer.height / 1.5, "retry_button").setDepth(1);
          retryButton.setScale(.2);
          retryButton.setInteractive();
          retryButton.on('pointerover', () => { console.log('pointerover'); });
          gameSettings.health = 100;
          gameSettings.color = 0xffffff;
          retryButton.on('pointerdown', () => this.scene.start("main-menu")); 
    }

    update(){
       
    }
}